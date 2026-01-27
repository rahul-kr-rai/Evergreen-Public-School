document.addEventListener('DOMContentLoaded', () => {
    // 1. MOBILE HAMBURGER MENU TOGGLE
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-container li a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. SMOOTH SCROLLING WITH OFFSET (Fixes content hiding under sticky header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Header (70px) + Nav (50px) = 120px offset
                const headerOffset = 120; 
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. DYNAMIC TICKER SPEED
    const tickerText = document.querySelector('.ticker-text');
    if (tickerText) {
        const textLength = tickerText.innerText.length;
        const duration = Math.max(textLength / 5, 20); // Ensures it's not too fast
        tickerText.style.animationDuration = `${duration}s`;
    }

    // 4. ACTIVE TAB HIGHLIGHTING
    const navItems = document.querySelectorAll('.nav-container li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 5. GALLERY LINK UNDER DEVELOPMENT
    const galleryLink = document.querySelector('a[href="gallery.html"]');
    if (galleryLink) {
        galleryLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Website under development. For any queries, please contact us.");
            window.location.href = "index.html";
        });
    }
});