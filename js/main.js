document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.header__toggle');
    const body = document.body;
    let mobileMenu, overlay;
    
    // Create mobile menu and overlay if they don't exist
    if (!document.querySelector('.mobile-menu')) {
        // Create mobile menu
        mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        
        // Clone navigation from header
        const nav = document.querySelector('.header__nav ul').cloneNode(true);
        mobileMenu.appendChild(nav);
        
        // Create overlay
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        
        // Append to body
        body.appendChild(mobileMenu);
        body.appendChild(overlay);
    } else {
        mobileMenu = document.querySelector('.mobile-menu');
        overlay = document.querySelector('.overlay');
    }
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        menuToggle.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on overlay
    overlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('no-scroll');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
    
    // Schedule tabs
    const scheduleTabs = document.querySelectorAll('.schedule__tab');
    const scheduleContents = document.querySelectorAll('.schedule__content');
    
    scheduleTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            scheduleTabs.forEach(t => t.classList.remove('active'));
            scheduleContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const day = this.getAttribute('data-day');
            document.getElementById(day).classList.add('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let scrollPosition = 0;
    
    window.addEventListener('scroll', function() {
        const currentPosition = window.pageYOffset;
        
        if (currentPosition > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        scrollPosition = currentPosition;
    });
});