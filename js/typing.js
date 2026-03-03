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
        mission: 'mission',
        missionValue: 'openSource',
        location: 'location',
        locationValue: 'Buenos Aires',
        reach: 'reach',
        reachValue: 'worldwide',
        philosophy: 'philosophy',
        philosophyKey: 'philosophy',
        democratize: 'democratize',
        collaborate: 'collaborate',
        innovate: 'innovate'
    } : {
        keyword: 'const',
        varName: 'bairesCoding',
        mission: 'mision',
        missionValue: 'openSource',
        location: 'ubicacion',
        locationValue: 'Buenos Aires',
        reach: 'alcance',
        reachValue: 'worldwide',
        philosophy: 'filosofia',
        philosophyKey: 'philosophy',
        democratize: 'democratizar',
        collaborate: 'colaborar',
        innovate: 'innovar'
    };
    
    const lineContents = [
        `<span class="code-keyword">${codeContent.keyword}</span> <span class="code-var">${codeContent.varName}</span> = {`,
        `  <span class="code-property">${codeContent.mission}</span>: <span class="code-string">"${codeContent.missionValue}"</span>,`,
        `  <span class="code-property">${codeContent.location}</span>: <span class="code-string">"${codeContent.locationValue}"</span>,`,
        `  <span class="code-property">${codeContent.reach}</span>: <span class="code-string">"${codeContent.reachValue}"</span>,`,
        `  <span class="code-property">${codeContent.philosophy}</span>: {`,
        `    <span class="code-property">${codeContent.democratize}</span>: <span class="code-boolean">true</span>,`,
        `    <span class="code-property">${codeContent.collaborate}</span>: <span class="code-boolean">true</span>,`,
        `    <span class="code-property">${codeContent.innovate}</span>: <span class="code-boolean">true</span>`,
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
    
    // Animate each line with delay (slower: 600ms instead of 300ms)
    codeLines.forEach((line, index) => {
        const content = lineContents[index] || '';
        const charCount = content.replace(/<[^>]*>/g, '').length;
        
        setTimeout(() => {
            line.innerHTML = content;
            line.style.animation = `typing ${charCount * 0.04}s steps(${charCount}, end) forwards`;
        }, index * 600);
    });
    
    // Remove border-right after all animations complete
    setTimeout(() => {
        codeLines.forEach(line => {
            line.classList.add('typing-complete');
            line.style.borderRight = 'none';
            line.style.whiteSpace = 'normal';
            line.style.width = '100%';
        });
    }, codeLines.length * 600 + 800);
})();