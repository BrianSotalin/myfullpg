const secciones = new fullpage('#fullpage', {
    // ──────────────────────────────────────────────────
    //   :::::: Opciones Basicas
    // ──────────────────────────────────────────────────
    autoScrolling: true,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: true,
    // ──────────────────────────────────────────────────
    //   :::::: Barra de navegación
    // ──────────────────────────────────────────────────
    navigation: true, // Muesta la barra de navegación.
    menu: '#menu', // Menu de navegación.
    anchors: ['inicio', 'about','productos', 'contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
    navigationTooltips: ['Inicio','About', 'Productos', 'Contacto'], // Tooltips que mostrara por cada boton.
    showActiveTooltip: false, // Mostrar tooltip activa.
    // ──────────────────────────────────────────────────
    //   :::::: Secciones
    // ──────────────────────────────────────────────────
    sectionsColor: ['#000', '#c2c2c2', '#000'],
    verticalCentered: true,
    	// ──────────────────────────────────────────────────
	//   :::::: Slides
	// ──────────────────────────────────────────────────
		 controlArrows: true, // Flechas del slide
		 slidesNavigation: false, // Indicadores del slide
         	// ──────────────────────────────────────────────────
	//   :::::: Animaciones (Callbacks de FullPage.js)
	// ──────────────────────────────────────────────────
	afterLoad: function(origin, destination){
        if(destination.anchor == 'contacto'){
             document.querySelector('.footer h2').style.opacity = 1;
             document.querySelector('.footer h3').style.opacity = 1;
        }else{
            document.querySelector('.footer h2').style.opacity = 0;
            document.querySelector('.footer h3').style.opacity = 0;
        }
        if(destination.anchor == 'about'){
            document.querySelector('.about .texto-power').style.opacity = 1;
          
       }else{
        document.querySelector('.about .texto-power').style.opacity = 0;
       }
   }
   
});