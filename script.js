// Mobile Navigation Toggle - SIMPLIFIED VERSION
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active')
    ? '<i class="fas fa-times></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Simple form submission handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate child elements with delay
            if (entry.target.classList.contains('skills-container')) {
                const skillsItems = entry.target.querySelectorAll('.skill-item');
                skillsItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 200);
                });
            }

            if (entry.target.classList.contains('certificate-gallery')) {
                const certificateItems = entry.target.querySelectorAll('.certificate-item');
                certificateItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 200);
                });
            }

            if (entry.target.classList.contains('projects-grid')) {
                const projectCards = entry.target.querySelectorAll('.project-card');
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200);
                });
            }

            if (entry.target.classList.contains('testimonials-container')) {
                const testimonialCards = entry.target.querySelectorAll('.testimonial-card');
                testimonialCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200);
                });
            }
        }
    });
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// Observe specific containers
const skillContainer = document.querySelector('.skills-container');
if (skillContainer) observer.observe(skillContainer);

const certificateGallery = document.querySelector('.certificate-gallery');
if (certificateGallery) observer.observe(certificateGallery);

const projectsGrid = document.querySelector('.projects-grid');
if (projectsGrid) observer.observe(projectsGrid);

const testimonialsContainer = document.querySelector('.testimonials-container');
if (testimonialsContainer) observer.observe(testimonialsContainer);


// Initialize here section as visible
document.querySelector('.hero').classList.add('visible');

// Add hover effect to buttons with delay
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});