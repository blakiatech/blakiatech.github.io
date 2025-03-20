document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    const cards = document.querySelectorAll('.case-study-card');
    
    let currentIndex = 0;
    
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
            updateCarousel();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
            updateCarousel();
        });
    }
    
    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Auto-slide every 5 seconds
    setInterval(function() {
        currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    }, 5000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Capturar datos
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Enviar datos a n8n Webhook
            fetch("https://n8n-main-instance-production-96ac.up.railway.app/webhook/contacto", { // 🔹 Reemplaza con la URL de tu webhook
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
            })
            .then(response => response.json())
            .then(data => {
                alert('✅ Mensaje enviado con éxito.');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('❌ Hubo un problema al enviar el mensaje.');
            });
        });
    }
});


    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        }
    });
});
