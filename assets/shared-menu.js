(() => {
    const script = document.currentScript;
    if (!script) {
        throw new Error("Shared menu script must run as a classic script.");
    }

    const logoUrl = new URL("../wp-content/uploads/2018/08/cropped-Logo300-192x192.png", script.src).href;
    const markup = `<header id="masthead" class="site-header" role="banner" itemtype="https://schema.org/WPHeader" itemscope><div id="main-header" class="site-header-wrap"><div class="site-header-inner-wrap"><div class="site-header-upper-wrap"><div class="site-header-upper-inner-wrap"><div class="site-main-header-wrap site-header-row-container site-header-focus-item site-header-row-layout-standard kadence-sticky-header" data-section="kadence_customizer_header_main" data-shrink="false" data-reveal-scroll-up="false"><div class="site-header-row-container-inner"><div class="site-container"><div class="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-center-column"><div class="site-header-main-section-left site-header-section site-header-section-left"><div class="site-header-item site-header-focus-item" data-section="title_tagline"><div class="site-branding branding-layout-standard site-brand-logo-only"><a class="brand has-logo-image" href="https://d3stroya.github.io/programacionesdidacticasvirgula/" rel="home"><img src="${logoUrl}" width="192" height="192" class="custom-logo" alt="Logo de Vírgula" decoding="async"></a></div></div><div class="site-header-main-section-left-center site-header-section site-header-section-left-center"></div></div><div class="site-header-main-section-center site-header-section site-header-section-center"><div class="site-header-item site-header-focus-item site-header-item-main-navigation header-navigation-layout-stretch-false header-navigation-layout-fill-stretch-false" data-section="kadence_customizer_primary_navigation"><nav id="site-navigation" class="main-navigation header-navigation hover-to-open nav--toggle-sub header-navigation-style-standard header-navigation-dropdown-animation-fade-down" role="navigation" aria-label="Principal"><div class="primary-menu-container header-menu-container"><ul id="primary-menu" class="menu"><li id="menu-item-15685" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15685"><a href="#"><span class="nav-drop-title-wrap">Servicios<span class="dropdown-nav-toggle"><span class="kadence-svg-iconset svg-baseline"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Ampliar</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg></span></span></span></a>
<ul class="sub-menu">
  <li id="menu-item-1142" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1142"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/portada-programacion-didactica/">Portada</a></li><li id="menu-item-8078" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8078"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/la-introduccion-de-la-programacion-didactica/">Introducción</a></li><li id="menu-item-206" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-206"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/objetivos-programacion-didactica/">Objetivos</a></li><li id="menu-item-205" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-205"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/competencias-programacion-didactica/"><span class="nav-drop-title-wrap">Competencias<span class="dropdown-nav-toggle"><span class="kadence-svg-iconset svg-baseline"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Ampliar</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg></span></span></span></a>
<ul class="sub-menu">
  <li id="menu-item-1024" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1024"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/competencias-programacion-didactica/competencias-clave/">Las Competencias Clave</a></li></ul></li><li id="menu-item-204" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-204"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/contenidos-programacion-didactica/">Contenidos</a></li><li id="menu-item-203" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-203"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/metodologia-programacion-didactica/"><span class="nav-drop-title-wrap">Metodología<span class="dropdown-nav-toggle"><span class="kadence-svg-iconset svg-baseline"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Ampliar</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg></span></span></span></a>
<ul class="sub-menu"><li id="menu-item-11380" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11380"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/metodologia-programacion-didactica/metodologias-activas-de-ensenanza-aprendizaje/">Metodologías activas</a></li></ul></li><li id="menu-item-202" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-202"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/evaluacion-programacion-didactica/">Evaluación</a></li><li id="menu-item-1278" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1278"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/conclusion-programacion-didactica/">Conclusión</a></li><li id="menu-item-1429" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1429"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/bibliografia-programacion-didactica/">Bibliografía</a></li><li id="menu-item-315" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-315"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/unidades-didacticas/">Unidades Didácticas</a></li><li id="menu-item-6672" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6672"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/defensa-programacion-didactica/">Defensa</a></li></ul></li><li id="menu-item-15692" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15692"><a href="#"><span class="nav-drop-title-wrap">Niveles<span class="dropdown-nav-toggle"><span class="kadence-svg-iconset svg-baseline"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Ampliar</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg></span></span></span></a>
<ul class="sub-menu"><li id="menu-item-15693" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15693"><a href="https://programacionesdidacticasvirgula.com/tag/infantil/">Infantil</a></li><li id="menu-item-15694" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15694"><a href="https://programacionesdidacticasvirgula.com/tag/primaria/">Primaria</a></li><li id="menu-item-15695" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15695"><a href="https://programacionesdidacticasvirgula.com/tag/eso/">ESO</a></li><li id="menu-item-15696" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15696"><a href="https://programacionesdidacticasvirgula.com/tag/bachillerato/">Bachillerato</a></li><li id="menu-item-15697" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15697"><a href="https://programacionesdidacticasvirgula.com/tag/fp/">Formación Profesional</a></li></ul></li><li id="menu-item-15719" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15719"><a href="https://programacionesdidacticasvirgula.com/oposiciones/">Oposiciones</a></li></ul></li><li id="menu-item-1851" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1851"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/mi-cuenta/">Mi cuenta</a></li></ul></div></nav></div></div><div class="site-header-main-section-right site-header-section site-header-section-right"><div class="site-header-main-section-right-center site-header-section site-header-section-right-center"></div><div class="site-header-item site-header-focus-item" data-section="kadence_customizer_header_search"><div class="search-toggle-open-container">
<button class="search-toggle-open drawer-toggle search-toggle-style-default" aria-label="Ver el formulario de búsqueda" aria-haspopup="dialog" aria-controls="search-drawer" data-toggle-target="#search-drawer" data-toggle-body-class="showing-popup-drawer-from-full" aria-expanded="false" data-set-focus="#search-drawer .search-field">
<span class="search-toggle-icon"><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-search-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewbox="0 0 26 28"><title>Buscar</title><path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zM26 26c0 1.094-0.906 2-2 2-0.531 0-1.047-0.219-1.406-0.594l-5.359-5.344c-1.828 1.266-4.016 1.937-6.234 1.937-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-0.672 4.406-1.937 6.234l5.359 5.359c0.359 0.359 0.578 0.875 0.578 1.406z"></path>
</svg></span></span>
</button></div></div><div class="site-header-item site-header-focus-item" data-section="kadence_customizer_cart"></div></div></div></div></div></div></div></div></div></div><div id="mobile-header" class="site-mobile-header-wrap"><div class="site-header-inner-wrap"><div class="site-header-upper-wrap"><div class="site-header-upper-inner-wrap"><div class="site-main-header-wrap site-header-focus-item site-header-row-layout-standard site-header-row-tablet-layout-default site-header-row-mobile-layout-default  kadence-sticky-header" data-shrink="false" data-reveal-scroll-up="false"><div class="site-header-row-container-inner"><div class="site-container"><div class="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center"><div class="site-header-main-section-left site-header-section site-header-section-left"><div class="site-header-item site-header-focus-item" data-section="title_tagline"><div class="site-branding mobile-site-branding branding-layout-standard branding-tablet-layout-inherit site-brand-logo-only branding-mobile-layout-inherit"><a class="brand has-logo-image" href="https://d3stroya.github.io/programacionesdidacticasvirgula/" rel="home"><img src="${logoUrl}" width="192" height="192" class="custom-logo" alt="Logo de Vírgula" decoding="async"></a></div></div></div><div class="site-header-main-section-right site-header-section site-header-section-right"><div class="site-header-item site-header-focus-item site-header-item-navgation-popup-toggle" data-section="kadence_customizer_mobile_trigger"><div class="mobile-toggle-open-container">
<button id="mobile-toggle" class="menu-toggle-open drawer-toggle menu-toggle-style-default" aria-label="Abrir menú" data-toggle-target="#mobile-drawer" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".menu-toggle-close">
<span class="menu-toggle-icon"><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-menu-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Alternar el menú</title><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
</svg></span></span>
</button></div></div></div></div></div></div></div></div></div></div></div></header>
<div id="mobile-drawer" class="popup-drawer popup-drawer-layout-sidepanel popup-drawer-animation-fade popup-drawer-side-right" data-drawer-target-string="#mobile-drawer"><div class="drawer-overlay" data-drawer-target-string="#mobile-drawer"></div><div class="drawer-inner"><div class="drawer-header">
<button class="menu-toggle-close drawer-toggle" aria-label="Cerrar menú" data-toggle-target="#mobile-drawer" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".menu-toggle-open">
<span class="toggle-close-bar"></span>
<span class="toggle-close-bar"></span>
</svg></span></button></div><ul class="sub-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12601"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/que-es-virgulayapp/">VírgulaYapp</a></li></ul></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11452"><a href="https://cursos.programacionesdidacticasvirgula.com/">Cursos</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9109"><div class="drawer-nav-drop-wrap"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/blog/">Contenidos</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#mobile-menu .menu-item-9109 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Alternar menú hijo</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Ampliar</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg></span></button></div><ul class="sub-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15686"><div class="drawer-nav-drop-wrap"><a href="#">Itinerarios</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#mobile-menu .menu-item-15686 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Alternar menú hijo</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Ampliar</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg></span></button></div><ul class="sub-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15687"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/virgula-en-modo-serio/">Métele caña</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15688"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/virgula-en-modo-tranqui/">Vírgula en modo «tranqui»</a></li></ul></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6582"><div class="drawer-nav-drop-wrap"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/">Programación Didáctica</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#mobile-menu .menu-item-6582 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Alternar menú hijo</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Ampliar</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg></span></button></div><ul class="sub-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1142"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/portada-programacion-didactica/">Portada</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8078"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/la-introduccion-de-la-programacion-didactica/">Introducción</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-206"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/objetivos-programacion-didactica/">Objetivos</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-205"><div class="drawer-nav-drop-wrap"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/competencias-programacion-didactica/">Competencias</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#mobile-menu .menu-item-205 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Alternar menú hijo</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Ampliar</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg></span></button></div><ul class="sub-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1024"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/competencias-programacion-didactica/competencias-clave/">Las Competencias Clave</a></li></ul></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-204"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/contenidos-programacion-didactica/">Contenidos</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-203"><div class="drawer-nav-drop-wrap"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/metodologia-programacion-didactica/">Metodología</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#mobile-menu .menu-item-203 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Alternar menú hijo</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Ampliar</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg></span></button></div><ul class="sub-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11380"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/metodologia-programacion-didactica/metodologias-activas-de-ensenanza-aprendizaje/">Metodologías activas</a></li></ul></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-202"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/evaluacion-programacion-didactica/">Evaluación</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1278"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/conclusion-programacion-didactica/">Conclusión</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1429"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/bibliografia-programacion-didactica/">Bibliografía</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-315"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/unidades-didacticas/">Unidades Didácticas</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6672"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/programacion-didactica-home/elementos-programacion-didactica/defensa-programacion-didactica/">Defensa</a></li></ul></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15692"><div class="drawer-nav-drop-wrap"><a href="#">Niveles</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#mobile-menu .menu-item-15692 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Alternar menú hijo</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24"><title>Ampliar</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
</svg></span></button></div><ul class="sub-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15693"><a href="https://programacionesdidacticasvirgula.com/tag/infantil/">Infantil</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15694"><a href="https://programacionesdidacticasvirgula.com/tag/primaria/">Primaria</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15695"><a href="https://programacionesdidacticasvirgula.com/tag/eso/">ESO</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15696"><a href="https://programacionesdidacticasvirgula.com/tag/bachillerato/">Bachillerato</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15697"><a href="https://programacionesdidacticasvirgula.com/tag/fp/">Formación Profesional</a></li></ul></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-15719"><a href="https://programacionesdidacticasvirgula.com/oposiciones/">Oposiciones</a></li></ul></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1851"><a href="https://d3stroya.github.io/programacionesdidacticasvirgula/mi-cuenta/">Mi cuenta</a></li></ul></div></nav></div></div></div></div>`;
    script.insertAdjacentHTML("beforebegin", markup);
    script.remove();

    const siteRoot = new URL("../", script.src).href;
    const menuItems = [
        { slug: "inicio", label: "Inicio", href: siteRoot },
        {
            slug: "programacion-didactica",
            label: "Programación didáctica",
            href: `${siteRoot}programacion-didactica-home/elementos-programacion-didactica/`,
            children: [
                [
                    "portada",
                    "Portada",
                    "programacion-didactica-home/elementos-programacion-didactica/portada-programacion-didactica/",
                ],
                [
                    "introduccion",
                    "Introducción",
                    "programacion-didactica-home/elementos-programacion-didactica/la-introduccion-de-la-programacion-didactica/",
                ],
                [
                    "objetivos",
                    "Objetivos",
                    "programacion-didactica-home/elementos-programacion-didactica/objetivos-programacion-didactica/",
                ],
                [
                    "competencias",
                    "Competencias",
                    "programacion-didactica-home/elementos-programacion-didactica/competencias-programacion-didactica/",
                ],
                [
                    "contenidos",
                    "Contenidos",
                    "programacion-didactica-home/elementos-programacion-didactica/contenidos-programacion-didactica/",
                ],
                [
                    "metodologia",
                    "Metodología",
                    "programacion-didactica-home/elementos-programacion-didactica/metodologia-programacion-didactica/",
                ],
                [
                    "evaluacion",
                    "Evaluación",
                    "programacion-didactica-home/elementos-programacion-didactica/evaluacion-programacion-didactica/",
                ],
                [
                    "conclusion",
                    "Conclusión",
                    "programacion-didactica-home/elementos-programacion-didactica/conclusion-programacion-didactica/",
                ],
                [
                    "bibliografia",
                    "Bibliografía",
                    "programacion-didactica-home/elementos-programacion-didactica/bibliografia-programacion-didactica/",
                ],
                [
                    "unidades-didacticas",
                    "Unidades didácticas",
                    "programacion-didactica-home/unidades-didacticas/",
                ],
                [
                    "defensa",
                    "Defensa",
                    "programacion-didactica-home/elementos-programacion-didactica/defensa-programacion-didactica/",
                ],
            ].map(([slug, label, path]) => ({
                slug,
                label,
                href: `${siteRoot}${path}`,
            })),
        },
        {
            slug: "niveles",
            label: "Niveles",
            href: "#",
            children: [
                ["infantil", "Infantil"],
                ["primaria", "Primaria"],
                ["eso", "ESO"],
                ["bachillerato", "Bachillerato"],
                ["fp", "Formación Profesional"],
            ].map(([slug, label]) => ({
                slug,
                label,
                href: `${siteRoot}tag/${slug}/`,
            })),
        },
    ];

    const createArrowIcon = () => {
        const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
        );
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("class", "site-svg-icon site-arrow-down-svg");
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("width", "24");
        svg.setAttribute("height", "24");
        svg.setAttribute("viewBox", "0 0 24 24");

        const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
        );
        path.setAttribute(
            "d",
            "M5.293 9.707l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L12 13.586 6.707 8.293a1 1 0 0 0-1.414 1.414z",
        );
        svg.append(path);

        const icon = document.createElement("span");
        icon.className = "site-svg-iconset svg-baseline";
        icon.setAttribute("aria-hidden", "true");
        icon.append(svg);
        return icon;
    };

    const createMenuItem = (item, mobile = false) => {
        const li = document.createElement("li");
        li.className = `menu-item${item.children ? " menu-item-has-children" : ""}`;
        li.id = `${mobile ? "mobile" : "primary"}-menu-${item.slug}`;

        const link = document.createElement("a");
        link.href = item.href;
        link.textContent = item.label;

        if (item.children && mobile) {
            const wrap = document.createElement("div");
            wrap.className = "drawer-nav-drop-wrap";
            wrap.append(link);

            const submenuId = `mobile-submenu-${item.slug}`;
            const toggle = document.createElement("button");
            toggle.type = "button";
            toggle.className = "drawer-sub-toggle";
            toggle.dataset.toggleTarget = `#${submenuId}`;
            toggle.setAttribute("aria-controls", submenuId);
            toggle.setAttribute("aria-expanded", "false");

            const label = document.createElement("span");
            label.className = "screen-reader-text";
            label.textContent = `Alternar submenú de ${item.label}`;
            toggle.append(label, createArrowIcon());
            wrap.append(toggle);
            li.append(wrap);

            const submenu = document.createElement("ul");
            submenu.id = submenuId;
            submenu.className = "sub-menu";
            item.children.forEach((child) =>
                submenu.append(createMenuItem(child, mobile)),
            );
            li.append(submenu);
            return li;
        }

        if (item.children) {
            const titleWrap = document.createElement("span");
            titleWrap.className = "nav-drop-title-wrap";
            titleWrap.append(document.createTextNode(item.label));

            const arrow = document.createElement("span");
            arrow.className = "dropdown-nav-toggle";
            arrow.append(createArrowIcon());
            titleWrap.append(arrow);
            link.replaceChildren(titleWrap);
        }

        li.append(link);
        if (item.children) {
            const submenu = document.createElement("ul");
            submenu.className = "sub-menu";
            item.children.forEach((child) =>
                submenu.append(createMenuItem(child)),
            );
            li.append(submenu);
        }
        return li;
    };

    const primaryMenu = document.querySelector("#primary-menu");
    const drawerInner = document.querySelector("#mobile-drawer .drawer-inner");
    const drawerHeader = drawerInner?.querySelector(".drawer-header");
    if (!primaryMenu || !drawerInner || !drawerHeader)
        throw new Error("Shared menu containers are missing from the page.");

    primaryMenu.replaceChildren(
        ...menuItems.map((item) => createMenuItem(item)),
    );
    for (const item of [...primaryMenu.parentElement.children]) {
        if (item !== primaryMenu) item.remove();
    }

    const mobileMenu = document.createElement("ul");
    mobileMenu.id = "mobile-menu";
    mobileMenu.className = "menu has-collapse-sub-nav";
    mobileMenu.append(
        ...menuItems.map((item) => createMenuItem(item, true)),
    );

    const mobileNavigation = document.createElement("nav");
    mobileNavigation.className =
        "mobile-navigation drawer-navigation drawer-navigation-parent-toggle-false";
    mobileNavigation.setAttribute("aria-label", "Menú principal móvil");
    mobileNavigation.append(mobileMenu);

    const mobileContent = document.createElement("div");
    mobileContent.className =
        "drawer-content mobile-drawer-content content-align-left content-valign-top";
    mobileContent.append(mobileNavigation);
    drawerInner.replaceChildren(drawerHeader, mobileContent);

    const drawerTimers = new WeakMap();
    const drawerOpeners = new WeakMap();

    const drawerToggles = (drawer) =>
        [...document.querySelectorAll("[data-toggle-target]")].filter(
            (toggle) => toggle.dataset.toggleTarget === `#${drawer.id}`,
        );

    const closeDrawer = (drawer, trigger) => {
        drawer.classList.remove("active");
        for (const toggle of drawerToggles(drawer)) {
            toggle.setAttribute("aria-expanded", "false");
            const bodyClasses = toggle.dataset.toggleBodyClass
                ?.split(/\s+/)
                .filter(Boolean);
            if (bodyClasses?.length)
                document.body.classList.remove(...bodyClasses);
        }

        window.clearTimeout(drawerTimers.get(drawer));
        drawerTimers.set(
            drawer,
            window.setTimeout(
                () => drawer.classList.remove("show-drawer"),
                250,
            ),
        );

        const focusTarget = trigger?.dataset.setFocus
            ? document.querySelector(trigger.dataset.setFocus)
            : drawerOpeners.get(drawer);
        focusTarget?.focus();
    };

    const openDrawer = (drawer, trigger) => {
        for (const otherDrawer of document.querySelectorAll(
            ".popup-drawer.active",
        )) {
            if (otherDrawer !== drawer) closeDrawer(otherDrawer);
        }

        window.clearTimeout(drawerTimers.get(drawer));
        drawer.classList.add("show-drawer");
        for (const bodyClass of trigger.dataset.toggleBodyClass
            ?.split(/\s+/)
            .filter(Boolean) ?? []) {
            document.body.classList.add(bodyClass);
        }
        document.documentElement.style.setProperty(
            "--scrollbar-offset",
            `${window.innerWidth - document.documentElement.clientWidth}px`,
        );
        drawerOpeners.set(drawer, trigger);

        for (const toggle of drawerToggles(drawer)) {
            toggle.setAttribute("aria-expanded", "true");
        }

        window.requestAnimationFrame(() => drawer.classList.add("active"));
        if (trigger.dataset.setFocus) {
            window.requestAnimationFrame(() =>
                document.querySelector(trigger.dataset.setFocus)?.focus(),
            );
        }
    };

    document.addEventListener("click", (event) => {
        if (!(event.target instanceof Element)) return;

        const overlay = event.target.closest(".drawer-overlay");
        if (overlay) {
            const drawer = document.querySelector(
                overlay.getAttribute("data-drawer-target-string"),
            );
            if (drawer?.classList.contains("popup-drawer")) {
                closeDrawer(drawer);
            }
            return;
        }

        const toggle = event.target.closest("[data-toggle-target]");
        if (!toggle) return;

        const target = document.querySelector(toggle.dataset.toggleTarget);
        if (!target) {
            throw new Error(
                `Missing menu toggle target: ${toggle.dataset.toggleTarget}`,
            );
        }

        if (target.classList.contains("popup-drawer")) {
            if (target.classList.contains("active")) {
                closeDrawer(target, toggle);
            } else {
                openDrawer(target, toggle);
            }
            return;
        }

        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        target.classList.toggle("show-drawer", !isExpanded);
        toggle.setAttribute("aria-expanded", String(!isExpanded));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        for (const drawer of document.querySelectorAll(
            ".popup-drawer.active",
        )) {
            closeDrawer(drawer);
        }
    });

    const normalizePath = (path) =>
        path.replace(/index\.html$/i, "").replace(/\/+$/, "") + "/";
    const currentPath = normalizePath(window.location.pathname);

    for (const link of document.querySelectorAll(
        "#primary-menu a[href], #mobile-menu a[href]",
    )) {
        if (link.getAttribute("href").startsWith("#")) continue;
        const target = new URL(link.href, window.location.href);
        if (normalizePath(target.pathname) !== currentPath) continue;

        const item = link.closest("li");
        if (!item) continue;
        item.classList.add("current-menu-item", "current_page_item");
        link.setAttribute("aria-current", "page");

        for (
            let parent = item.parentElement.closest("li");
            parent;
            parent = parent.parentElement.closest("li")
        ) {
            parent.classList.add(
                "current-menu-ancestor",
                "current_page_ancestor",
                "current_page_parent",
            );
        }
    }

    const loadRouteExperience = () => {
        const routeExperienceScript = document.createElement("script");
        routeExperienceScript.src = new URL(
            "./route-experience.js",
            script.src,
        ).href;
        routeExperienceScript.async = false;
        routeExperienceScript.addEventListener("error", () => {
            console.error("Could not load the route experience controls.");
        });
        document.head.append(routeExperienceScript);
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", loadRouteExperience, {
            once: true,
        });
    } else {
        loadRouteExperience();
    }
})();
