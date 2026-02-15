// Main JavaScript - Initialize everything
(function() {
    'use strict';
    
    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        console.log('🚀 BairesCoding website loaded');
        
        // Add loaded class to body for CSS transitions
        document.body.classList.add('loaded');
        
        // Feature detection
        const supportsIntersectionObserver = 'IntersectionObserver' in window;
        const supportsRequestAnimationFrame = 'requestAnimationFrame' in window;
        
        if (!supportsIntersectionObserver) {
            console.warn('IntersectionObserver not supported, fallback activated');
            // Show all elements immediately
            document.querySelectorAll('[data-aos]').forEach(el => {
                el.classList.add('aos-animate');
            });
        }
        
        // Performance optimization: Pause animations when tab is hidden
        let hiddenTimeout;
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                hiddenTimeout = setTimeout(() => {
                    document.body.classList.add('animations-paused');
                }, 1000);
            } else {
                clearTimeout(hiddenTimeout);
                document.body.classList.remove('animations-paused');
            }
        });
        
        // Add touch detection for mobile optimizations
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) {
            document.body.classList.add('touch-device');
        }
        
        // Preload critical images
        const criticalImages = [
            './img/bairescoding.svg'
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    });
    
    // Handle resize efficiently
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Trigger any resize-dependent updates
            document.dispatchEvent(new CustomEvent('site:resize'));
        }, 250);
    }, { passive: true });
    
    // Error handling
    window.addEventListener('error', (e) => {
        console.error('Site error:', e.error);
    });
    
    // Expose site utilities globally
    window.BairesCoding = {
        version: '1.0.0',
        utils: {
            debounce: (func, wait) => {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            },
            throttle: (func, limit) => {
                let inThrottle;
                return function(...args) {
                    if (!inThrottle) {
                        func.apply(this, args);
                        inThrottle = true;
                        setTimeout(() => inThrottle = false, limit);
                    }
                };
            }
        }
    };
})();