// Typing Effect for Hero Title
(function() {
    'use strict';
    
    const text = 'BairesCoding';
    const typingElement = document.querySelector('.typing-text');
    const cursorElement = document.querySelector('.cursor-blink');
    
    if (!typingElement) return;
    
    let index = 0;
    let isDeleting = false;
    let isWaiting = false;
    
    function type() {
        if (isWaiting) return;
        
        const currentText = text.substring(0, index);
        typingElement.textContent = currentText;
        
        if (!isDeleting && index < text.length) {
            // Typing
            index++;
            setTimeout(type, 100 + Math.random() * 50);
        } else if (isDeleting && index > 0) {
            // Deleting (not used in this version but available)
            index--;
            setTimeout(type, 50);
        } else if (index === text.length) {
            // Finished typing
            isWaiting = true;
            if (cursorElement) {
                cursorElement.style.animation = 'blink 1s step-end infinite';
            }
            // Don't delete, just stop
            return;
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
})();