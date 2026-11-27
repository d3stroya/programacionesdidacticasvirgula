(() => {
    if (document.body.classList.contains("home-page")) return;

    const glossary = {
        "DUA-A":
            "Diseño Universal para el Aprendizaje Accesible: aplicación de los principios del DUA para reducir barreras de acceso, participación y aprendizaje.",
        LOMLOE:
            "Ley Orgánica 3/2020, de 29 de diciembre, por la que se modifica la Ley Orgánica 2/2006, de Educación.",
        DUA: "Diseño Universal para el Aprendizaje.",
        SA: "Situación de aprendizaje.",
    };

    const contentRoots = [...document.querySelectorAll(".entry-content")];
    const contextualDefinitions = [
        {
            expression: /competencia emprendedora\s*\(\s*$/i,
            definition:
                "Competencia emprendedora, una de las competencias clave.",
        },
        {
            expression: /criterios? de evaluación\s*\(\s*$/i,
            definition: "Criterio(s) de evaluación.",
        },
        {
            expression: /competencia específica\s*\(\s*$/i,
            definition: "Competencia específica.",
        },
    ];

    const tooltipTerms = new Set();
    const acronymPattern = /\b(DUA-A|LOMLOE|DUA|SA|CE)\b/gi;

    for (const root of contentRoots) {
        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
                    if (
                        node.parentElement?.closest(
                            "a, abbr, button, code, kbd, pre, script, style, textarea",
                        )
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                },
            },
        );
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);

        for (const node of textNodes) {
            const text = node.nodeValue;
            const matches = [...text.matchAll(acronymPattern)];
            if (!matches.length) continue;

            const replacement = document.createDocumentFragment();
            let cursor = 0;
            for (const match of matches) {
                const term = match[0].toUpperCase();
                const definition =
                    glossary[term] ||
                    (term === "CE"
                        ? contextualDefinitions.find(({ expression }) =>
                              expression.test(text.slice(0, match.index)),
                          )?.definition
                        : undefined);
                replacement.append(
                    document.createTextNode(text.slice(cursor, match.index)),
                );

                if (!definition || tooltipTerms.has(term)) {
                    replacement.append(document.createTextNode(match[0]));
                } else {
                    const abbreviation = document.createElement("abbr");
                    abbreviation.className = "glossary-term";
                    abbreviation.dataset.tooltip = definition;
                    abbreviation.setAttribute("aria-label", `${term}: ${definition}`);
                    abbreviation.setAttribute("title", definition);
                    abbreviation.tabIndex = 0;
                    abbreviation.textContent = match[0];
                    replacement.append(abbreviation);
                    tooltipTerms.add(term);
                }
                cursor = match.index + match[0].length;
            }
            replacement.append(document.createTextNode(text.slice(cursor)));
            node.replaceWith(replacement);
        }
    }

    const isGuide =
        document.body.classList.contains("single-post") ||
        document.body.classList.contains("page");
    if (!isGuide) return;

    const progressKey = "virgula-reading-route-v1";
    const progressWidget = document.createElement("aside");
    progressWidget.className = "route-progress";
    progressWidget.innerHTML = `
        <button class="route-progress__toggle" type="button" aria-controls="route-progress-panel" aria-expanded="false">
            <span class="route-progress__label">RUTA</span>
            <strong class="route-progress__count" aria-live="polite">00</strong>
            <span class="route-progress__label">LEÍDAS</span>
        </button>
        <section class="route-progress__panel" id="route-progress-panel" aria-labelledby="route-progress-title" hidden>
            <div class="route-progress__panel-heading">
                <div>
                    <p class="route-progress__eyebrow">ITINERARIO DE APRENDIZAJE</p>
                    <h2 id="route-progress-title">Tu ruta</h2>
                </div>
                <button class="route-progress__close" type="button" aria-label="Cerrar progreso">×</button>
            </div>
            <p class="route-progress__summary" aria-live="polite"></p>
            <div class="route-progress__track" role="progressbar" aria-label="Progreso de lectura de esta guía" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                <span></span>
            </div>
            <p class="route-progress__recent-label">GUÍAS COMPLETADAS</p>
            <ol class="route-progress__list"></ol>
        </section>`;
    document.body.append(progressWidget);

    const toggle = progressWidget.querySelector(".route-progress__toggle");
    const panel = progressWidget.querySelector(".route-progress__panel");
    const closeButton = progressWidget.querySelector(".route-progress__close");
    const count = progressWidget.querySelector(".route-progress__count");
    const summary = progressWidget.querySelector(".route-progress__summary");
    const list = progressWidget.querySelector(".route-progress__list");
    const track = progressWidget.querySelector(".route-progress__track");
    const trackFill = track.querySelector("span");

    let completedGuides = [];
    let storageAvailable = true;

    try {
        const savedProgress = window.localStorage.getItem(progressKey);
        if (savedProgress !== null) {
            const parsedProgress = JSON.parse(savedProgress);
            if (
                !Array.isArray(parsedProgress) ||
                parsedProgress.some(
                    (entry) =>
                        !entry ||
                        typeof entry.path !== "string" ||
                        typeof entry.href !== "string" ||
                        typeof entry.title !== "string" ||
                        typeof entry.completedAt !== "string",
                )
            ) {
                throw new TypeError("Saved reading progress has an invalid format.");
            }
            completedGuides = parsedProgress;
        }
    } catch (error) {
        storageAvailable = false;
        console.error("Could not load the saved reading route.", error);
    }

    const renderProgress = () => {
        count.textContent = String(completedGuides.length).padStart(2, "0");
        toggle.setAttribute(
            "aria-label",
            storageAvailable
                ? `Progreso: ${completedGuides.length} guías completadas`
                : "El progreso de lectura no está disponible",
        );
        summary.textContent = storageAvailable
            ? `${completedGuides.length} ${completedGuides.length === 1 ? "guía completada" : "guías completadas"} en este dispositivo.`
            : "No se puede guardar el progreso en este navegador.";

        list.replaceChildren();
        for (const guide of [...completedGuides].reverse().slice(0, 5)) {
            const item = document.createElement("li");
            const link = document.createElement("a");
            link.href = guide.href;
            link.textContent = guide.title;
            item.append(link);
            list.append(item);
        }
    };

    const currentUrl = new URL(window.location.href);
    currentUrl.hash = "";
    const currentPath = currentUrl.pathname;
    const currentTitle =
        document
            .querySelector(".entry-header .entry-title, .entry-hero .entry-title, h1")
            ?.textContent.trim() || document.title;
    let currentGuideCompleted = completedGuides.some(
        (guide) => guide.path === currentPath,
    );

    const saveCurrentGuide = () => {
        if (!storageAvailable || currentGuideCompleted) return;

        const updatedGuides = completedGuides.filter(
            (guide) => guide.path !== currentPath,
        );
        updatedGuides.push({
            path: currentPath,
            href: currentUrl.href,
            title: currentTitle,
            completedAt: new Date().toISOString(),
        });

        try {
            window.localStorage.setItem(
                progressKey,
                JSON.stringify(updatedGuides),
            );
            completedGuides = updatedGuides;
            currentGuideCompleted = true;
            renderProgress();
        } catch (error) {
            storageAvailable = false;
            console.error("Could not save the reading route.", error);
            renderProgress();
        }
    };

    const updateReadingProgress = () => {
        const documentHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight,
        );
        const scrollRange = Math.max(0, documentHeight - window.innerHeight);
        const readProgress =
            scrollRange === 0
                ? 1
                : Math.min(1, window.scrollY / scrollRange);
        trackFill.style.transform = `scaleX(${readProgress})`;
        track.setAttribute("aria-valuenow", String(Math.round(readProgress * 100)));

        if (readProgress >= 0.88) saveCurrentGuide();
    };

    let scrollUpdateScheduled = false;
    const scheduleProgressUpdate = () => {
        if (scrollUpdateScheduled) return;
        scrollUpdateScheduled = true;
        window.requestAnimationFrame(() => {
            scrollUpdateScheduled = false;
            updateReadingProgress();
        });
    };

    if (!CSS.supports("animation-timeline: scroll()")) {
        const header = document.querySelector("#masthead");
        if (!header) {
            throw new Error("The shared header is required for route progress.");
        }
        const updateScrollIndicator = () => {
            const scrollRange = Math.max(
                0,
                document.documentElement.scrollHeight - window.innerHeight,
            );
            const progress =
                scrollRange === 0
                    ? 1
                    : Math.min(1, window.scrollY / scrollRange);
            header.style.setProperty("--route-scroll-progress", String(progress));
        };
        window.addEventListener("scroll", updateScrollIndicator, {
            passive: true,
        });
        window.addEventListener("resize", updateScrollIndicator);
        updateScrollIndicator();
    }

    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isOpen));
        panel.hidden = isOpen;
    });

    closeButton.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        panel.hidden = true;
        toggle.focus();
    });

    document.addEventListener("click", (event) => {
        if (!(event.target instanceof Node)) return;
        if (!progressWidget.contains(event.target)) {
            toggle.setAttribute("aria-expanded", "false");
            panel.hidden = true;
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || panel.hidden) return;
        toggle.setAttribute("aria-expanded", "false");
        panel.hidden = true;
        toggle.focus();
    });

    renderProgress();
    window.addEventListener("scroll", scheduleProgressUpdate, {
        passive: true,
    });
    window.addEventListener("resize", scheduleProgressUpdate);
    updateReadingProgress();
})();
