document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const switchForms = document.querySelectorAll('.switch-form');
    const loginForm = document.getElementById('login-form');
    const registroForm = document.getElementById('registro-form');
    const permisoForm = document.getElementById('permiso-form');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    switchForms.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica de autenticación
        alert('Inicio de sesión exitoso');
        showSection('dashboard');
        document.getElementById('usuario-nombre').textContent = 'Usuario';
    });

    registroForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica de registro
        alert('Registro exitoso');
        showSection('dashboard');
        document.getElementById('usuario-nombre').textContent = document.getElementById('nombre-completo').value.split(' ')[0];
    });

    permisoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí iría la lógica para enviar la solicitud de permiso
        alert('Solicitud de permiso enviada');
    });

    // Simulación de datos para el dashboard
    document.getElementById('permisos-pendientes').textContent = '5';
    document.getElementById('permisos-aprobados').textContent = '12';
    document.getElementById('tiempo-aprobacion').textContent = '2.5 días';

    // Animación para las tarjetas del dashboard
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});