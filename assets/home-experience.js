(() => {
    const home = document.querySelector(".home-page");
    if (!home) return;

    const stage = home.querySelector(".spatial-journey__stage");
    const nav = home.querySelector(".spatial-nav");
    if (!stage || !nav) {
        throw new Error("The spatial journey is missing its scene or navigation.");
    }

    const chapters = [...home.querySelectorAll("[data-journey-zone][data-journey-step]")];
    const groups = [...nav.querySelectorAll("[data-nav-group]")];
    if (!chapters.length || groups.length !== 3) {
        throw new Error("The spatial journey is missing required content or navigation.");
    }

    const captions = {
        origin: "01 · PUNTO DE PARTIDA",
        bridge: "02 · PUENTE INTERACTIVO",
        arrival: "03 · PUNTO DE LLEGADA",
    };
    const caption = stage.querySelector("[data-zone-caption]");
    if (!caption) {
        throw new Error("The spatial journey is missing its scene caption.");
    }

    const setActiveChapter = (chapter) => {
        const { journeyZone, journeyStep } = chapter.dataset;
        if (!captions[journeyZone]) {
            throw new Error(`Unknown spatial journey zone: ${journeyZone}`);
        }

        stage.dataset.zone = journeyZone;
        stage.dataset.step = journeyStep;
        caption.textContent = captions[journeyZone];

        for (const group of groups) {
            const isCurrent = group.dataset.navGroup === journeyZone;
            group.classList.toggle("is-current", isCurrent);
            const link = group.querySelector(".spatial-nav__heading a");
            if (isCurrent) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        }
    };

    const closeGroups = () => {
        for (const group of groups) {
            group.classList.remove("is-open");
            const toggle = group.querySelector(".spatial-nav__toggle");
            toggle.setAttribute("aria-expanded", "false");
            toggle.textContent = "+";
            toggle.setAttribute(
                "aria-label",
                `Desplegar ${group.querySelector(".spatial-nav__heading a").textContent}`,
            );
        }
    };

    const hoverNavigation = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
    );

    for (const group of groups) {
        const toggle = group.querySelector(".spatial-nav__toggle");
        if (!toggle) {
            throw new Error(`Missing submenu toggle for ${group.dataset.navGroup}.`);
        }

        group.addEventListener("mouseenter", () => {
            if (!hoverNavigation.matches) return;
            closeGroups();
            group.classList.add("is-open");
            toggle.setAttribute("aria-expanded", "true");
            toggle.textContent = "−";
            toggle.setAttribute(
                "aria-label",
                `Plegar ${group.querySelector(".spatial-nav__heading a").textContent}`,
            );
        });

        group.addEventListener("mouseleave", () => {
            if (!hoverNavigation.matches || group.contains(document.activeElement)) {
                return;
            }
            closeGroups();
        });

        toggle.addEventListener("click", (event) => {
            if (
                event.detail > 0 &&
                hoverNavigation.matches &&
                group.matches(":hover") &&
                toggle.getAttribute("aria-expanded") === "true"
            ) {
                return;
            }

            const shouldOpen = toggle.getAttribute("aria-expanded") !== "true";
            closeGroups();
            if (shouldOpen) {
                group.classList.add("is-open");
                toggle.setAttribute("aria-expanded", "true");
                toggle.textContent = "−";
                toggle.setAttribute(
                    "aria-label",
                    `Plegar ${group.querySelector(".spatial-nav__heading a").textContent}`,
                );
            }
        });
    }

    document.addEventListener("click", (event) => {
        if (!(event.target instanceof Node)) return;
        if (!nav.contains(event.target)) closeGroups();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        const openGroup = groups.find((group) =>
            group.classList.contains("is-open"),
        );
        if (!openGroup) return;

        closeGroups();
        openGroup.querySelector(".spatial-nav__toggle").focus();
    });

    setActiveChapter(chapters[0]);
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
        (entries) => {
            const visibleChapters = entries
                .filter((entry) => entry.isIntersecting)
                .sort(
                    (first, second) =>
                        second.intersectionRatio - first.intersectionRatio,
                );
            const activeChapter = visibleChapters[0];
            if (activeChapter) setActiveChapter(activeChapter.target);
        },
        {
            rootMargin: "-42% 0px -42% 0px",
            threshold: [0, 0.3, 0.6, 1],
        },
    );

    chapters.forEach((chapter) => observer.observe(chapter));
})();
