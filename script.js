document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos del DOM
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const pageContainer = document.getElementById('page-container'); // Contenedor principal del contenido
    const body = document.body;

    // Verificar que todos los elementos necesarios existan antes de añadir listeners
    if (menuToggle && sideMenu && pageContainer) {
        menuToggle.addEventListener('click', () => {
            // Alternar la clase 'active' en el menú lateral para mostrarlo/ocultarlo
            sideMenu.classList.toggle('is-active');

            // Alternar la clase 'menu-open' en el body para controlar el scroll y posibles overlays
            body.classList.toggle('menu-open');

            // Alternar la clase 'menu-open' en el contenedor principal para crear un efecto de "empuje"
            // Esta clase requerirá CSS correspondiente para aplicar la transformación o margen.
            pageContainer.classList.toggle('menu-open');

            // Actualizar el atributo aria-expanded para mejorar la accesibilidad
            const isExpanded = sideMenu.classList.contains('is-active');
            menuToggle.setAttribute('aria-expanded', isExpanded);

            // Opcional: Alternar una clase en el botón mismo para cambiar su apariencia
            // (por ejemplo, de icono de hamburguesa a icono de cierre)
            menuToggle.classList.toggle('is-active', isExpanded);
        });
    }
});