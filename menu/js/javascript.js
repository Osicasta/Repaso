document.addEventListener('DOMContentLoaded', function() {
    // Toggle del menú móvil
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
    
    // Cerrar menú al seleccionar una opción (solo móvil)
    const navLinks = document.querySelectorAll('.mobile-nav a, .mobile-nav .btn-entrar');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            
            // Scroll suave para las secciones
            if(this.getAttribute('href').startsWith('#')) {
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if(targetSection) {
                    event.preventDefault();
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Scroll suave para enlaces del menú desktop
    const desktopLinks = document.querySelectorAll('.desktop-nav a[href^="#"]');
    
    desktopLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if(targetSection) {
                event.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});