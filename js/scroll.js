// Scroll Animations with Intersection Observer
(function() {
    'use strict';
    
    // AOS-like functionality
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => observer.observe(el));
    
    // Timeline progress animation
    const timelineLine = document.querySelector('.timeline-line');
    const timelineProgress = document.querySelector('.timeline-progress');
    
    if (timelineLine && timelineProgress) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    timelineProgress.style.height = '100%';
                }
            });
        }, { threshold: 0.3 });
        
        timelineObserver.observe(timelineLine);
    }
    
    // Pixel items stagger animation
    const pixelItems = document.querySelectorAll('.pixel-item');
    
    const pixelObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
                
                pixelObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    pixelItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        pixelObserver.observe(item);
    });
    
    // Section headers animation
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                headerObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sectionHeaders.forEach(header => {
        header.setAttribute('data-aos', 'fade-up');
        headerObserver.observe(header);
    });
})();