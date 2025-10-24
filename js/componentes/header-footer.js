// header-footer.js - Componente dinámico para header y footer

// Función para obtener la ruta base según la ubicación actual
function obtenerRutaBase() {
    const path = window.location.pathname;
    
    // Si estamos en la raíz
    if (path === '/' || path.endsWith('index.html') || path.split('/').length <= 2) {
        return './';
    }
    // Si estamos en una subcarpeta (como /html/auth/)
    else if (path.includes('/html/')) {
        return '../../';
    }
    // Si estamos en home/
    else if (path.includes('/home/')) {
        return '../';
    }
    // Por defecto
    return './';
}

// Función para generar el header dinámicamente
function generarHeader() {
    const rutaBase = obtenerRutaBase();
    
    return `
        <h1 class="encabezado__titulo">WEBCHAT</h1>
        <nav class="encabezado__navegacion">
            <ul class="encabezado__lista">
                <li class="encabezado__item">
                    <a href="${rutaBase}index.html" class="encabezado__enlace">Inicio</a>
                </li>
                <li class="encabezado__item">
                    <a href="${rutaBase}html/informacion/acerca-de.html" class="encabezado__enlace">Acerca de</a>
                </li>
                <li class="encabezado__item">
                    <a href="${rutaBase}html/informacion/terminos.html" class="encabezado__enlace">Términos de uso</a>
                </li>
            </ul>
        </nav>
        <nav class="encabezado__navegacion-auth">
            <ul class="encabezado__lista">
                <li class="encabezado__item">
                    <a href="${rutaBase}html/auth/sign-in.html" class="encabezado__enlace">Iniciar Sesión</a>
                </li>
                <li class="encabezado__item">
                    <a href="${rutaBase}html/auth/sign-up.html" class="encabezado__enlace">Registrarse</a>
                </li>
            </ul>
        </nav>
    `;
}

// Función para generar el footer dinámicamente
function generarFooter() {
    return `
        <p class="pie__texto">&copy; 2025 WEBCHAT. Todos los derechos reservados.</p>
    `;
}

// Función principal para cargar los componentes
function cargarComponentes() {
    // Buscar el elemento header
    const encabezado = document.querySelector('.encabezado') ||
                      document.querySelector('header');
    
    // Buscar el elemento footer
    const pie = document.querySelector('.pie') || 
                document.querySelector('footer');
    
    // Cargar header si existe
    if (encabezado) {
        encabezado.innerHTML = generarHeader();
        console.log('Header cargado correctamente');
    }
    
    // Cargar footer si existe
    if (pie) {
        pie.innerHTML = generarFooter();
        console.log('Footer cargado correctamente');
    }
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', cargarComponentes);

// También ejecutar inmediatamente por si el script se carga después del DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarComponentes);
} else {
    cargarComponentes();
}