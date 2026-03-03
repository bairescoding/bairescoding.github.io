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

// Code Visual Typing Animation
(function() {
    'use strict';
    
    const codeVisual = document.querySelector('.code-visual');
    if (!codeVisual) return;
    
    const codeLines = codeVisual.querySelectorAll('.code-line');
    if (codeLines.length === 0) return;
    
    // Get content based on language
    const isEnglish = window.location.pathname.includes('/en/');
    
    const codeContent = isEnglish ? {
        keyword: 'const',
        varName: 'bairesCoding',
        mission: 'openSource',
        location: 'Buenos Aires',
        reach: 'worldwide',
        philosophy: 'philosophy',
        democratize: 'democratize',
        collaborate: 'collaborate',
        innovate: 'innovate'
    } : {
        keyword: 'const',
        varName: 'bairesCoding',
        mission: 'openSource',
        location: 'Buenos Aires',
        reach: 'worldwide',
        philosophy: 'filosofia',
        democratize: 'democratizar',
        collaborate: 'colaborar',
        innovate: 'innovar'
    };
    
    const lineContents = [
        `${codeContent.keyword} ${codeContent.varName} = {`,
        `  mission: "${codeContent.mission}",`,
        `  location: "${codeContent.location}",`,
        `  reach: "${codeContent.reach}",`,
        `  ${codeContent.philosophy}: {`,
        `    ${codeContent.democratize}: true,`,
        `    ${codeContent.collaborate}: true,`,
        `    ${codeContent.innovate}: true`,
        `  }`,
        `};`
    ];
    
    // Reset lines
    codeLines.forEach((line, index) => {
        line.style.width = '0';
        line.style.borderRight = '2px solid var(--color-primary)';
        line.style.animation = 'none';
        line.classList.remove('typing-complete');
    });
    
    // Animate each line with delay
    codeLines.forEach((line, index) => {
        const content = lineContents[index] || '';
        const charCount = content.length;
        
        setTimeout(() => {
            line.textContent = content;
            line.style.animation = `typing ${charCount * 0.02}s steps(${charCount}, end) forwards`;
        }, index * 300);
    });
    
    // Remove border-right after all animations complete
    setTimeout(() => {
        codeLines.forEach(line => {
            line.classList.add('typing-complete');
            line.style.borderRight = 'none';
            line.style.whiteSpace = 'normal';
            line.style.width = '100%';
        });
    }, codeLines.length * 300 + 500);
})();