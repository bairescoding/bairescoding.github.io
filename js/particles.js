// Particle System for Hero Background
(function() {
    'use strict';
    
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;
    let isActive = true;
    
    // Configuration
    const config = {
        particleCount: window.innerWidth < 768 ? 30 : 80,
        connectionDistance: 100,
        mouseDistance: 150,
        speed: 0.3,
        minSize: 1,
        maxSize: 3,
        colors: ['#56C34F', '#6EE768', '#3A8F35']
    };
    
    // Mouse position
    let mouse = { x: null, y: null };
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
            this.speedX = (Math.random() - 0.5) * config.speed;
            this.speedY = (Math.random() - 0.5) * config.speed;
            this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
            this.opacity = Math.random() * 0.5 + 0.3;
        }
        
        update() {
            // Move particle
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Mouse interaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < config.mouseDistance) {
                    const force = (config.mouseDistance - distance) / config.mouseDistance;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 2;
                    this.y -= Math.sin(angle) * force * 2;
                }
            }
            
            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
    
    // Initialize particles
    function init() {
        resize();
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Resize canvas
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Adjust particle count for mobile
        const newCount = window.innerWidth < 768 ? 30 : 80;
        if (newCount !== config.particleCount) {
            config.particleCount = newCount;
            init();
        }
    }
    
    // Draw connections between particles
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < config.connectionDistance) {
                    const opacity = (1 - distance / config.connectionDistance) * 0.2;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = '#56C34F';
                    ctx.globalAlpha = opacity;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        if (!isActive) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Event listeners
    window.addEventListener('resize', resize);
    
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    
    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Pause when tab is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isActive = false;
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        } else {
            isActive = true;
            animate();
        }
    });
    
    // Check if hero is visible (Intersection Observer)
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isActive) {
                    isActive = true;
                    animate();
                }
            } else {
                isActive = false;
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            }
        });
    }, { threshold: 0.1 });
    
    const hero = document.querySelector('.hero');
    if (hero) {
        heroObserver.observe(hero);
    }
    
    // Initialize
    init();
    animate();
})();