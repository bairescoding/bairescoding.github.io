/**
 * Language Switcher - ES/EN Language Toggle
 * Maneja la detección automática de idioma, persistencia y cambio entre español e inglés
 */
(function() {
    'use strict';
    
    // Constantes
    const STORAGE_KEY = 'bairescoding-language';
    const STORAGE_AUTO_REDIRECT_KEY = 'bairescoding-auto-redirect-done';
    const LANG_ES = 'es';
    const LANG_EN = 'en';
    
    /**
     * Detecta el idioma actual de la página según la URL
     */
    function getCurrentLanguage() {
        const path = window.location.pathname;
        // Si estamos en /en/ o cualquier ruta que incluya /en/, es inglés
        if (path.includes('/en/')) {
            return LANG_EN;
        }
        return LANG_ES;
    }
    
    /**
     * Obtiene el idioma guardado o detecta el idioma del navegador
     */
    function getSavedLanguage() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                return saved;
            }
        } catch (e) {
            console.warn('No se pudo acceder a localStorage:', e);
        }
        
        return null; // No hay preferencia guardada
    }
    
    /**
     * Detecta el idioma del navegador
     */
    function detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage || '';
        // Si el navegador está en inglés, devolver EN
        // Para cualquier otro idioma (incluyendo español), devolver EN por defecto
        // Según los criterios: "Si el idioma comienza con 'en', redirigir a /en/"
        // "Si el idioma es cualquier otro, mostrar la versión en español (default)"
        // PERO también dice: "También se debe mostrar en EN si es otro idioma que no sea ES"
        // Interpretación: ES solo si es explícitamente español, EN para todo lo demás
        if (browserLang.toLowerCase().startsWith('es')) {
            return LANG_ES;
        }
        return LANG_EN;
    }
    
    /**
     * Guarda el idioma seleccionado
     */
    function saveLanguage(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            console.warn('No se pudo guardar el idioma:', e);
        }
    }
    
    /**
     * Verifica si ya se hizo el auto-redirect
     */
    function hasAutoRedirected() {
        try {
            return localStorage.getItem(STORAGE_AUTO_REDIRECT_KEY) === 'true';
        } catch (e) {
            return false;
        }
    }
    
    /**
     * Marca que ya se hizo el auto-redirect
     */
    function markAutoRedirectDone() {
        try {
            localStorage.setItem(STORAGE_AUTO_REDIRECT_KEY, 'true');
        } catch (e) {
            console.warn('No se pudo marcar auto-redirect:', e);
        }
    }
    
    /**
     * Redirige al idioma correspondiente
     */
    function redirectToLanguage(targetLang) {
        const currentLang = getCurrentLanguage();
        if (currentLang === targetLang) {
            return; // Ya estamos en el idioma correcto
        }
        
        const currentPath = window.location.pathname;
        let newPath;
        
        if (targetLang === LANG_EN) {
            // Cambiar a inglés: agregar /en/ al path
            if (currentPath === '/' || currentPath === '/index.html') {
                newPath = '/en/';
            } else {
                newPath = '/en' + currentPath;
            }
        } else {
            // Cambiar a español: remover /en/ del path
            newPath = currentPath.replace('/en/', '/').replace('/en', '/');
            if (newPath === '/') {
                newPath = '/';
            }
        }
        
        // Mantener hash y query params si existen
        newPath += window.location.search + window.location.hash;
        
        window.location.href = newPath;
    }
    
    /**
     * Actualiza el texto del botón según el idioma actual
     */
    function updateToggleButton(currentLang) {
        const btn = document.getElementById('language-toggle');
        if (!btn) return;
        
        const textSpan = btn.querySelector('.lang-text');
        
        if (currentLang === LANG_ES) {
            if (textSpan) textSpan.textContent = 'ES';
            btn.setAttribute('aria-label', 'Cambiar a inglés');
            btn.setAttribute('title', 'Cambiar a inglés');
            btn.setAttribute('aria-pressed', 'false');
        } else {
            if (textSpan) textSpan.textContent = 'EN';
            btn.setAttribute('aria-label', 'Switch to Spanish');
            btn.setAttribute('title', 'Switch to Spanish');
            btn.setAttribute('aria-pressed', 'true');
        }
    }
    
    /**
     * Anuncia cambio de idioma a screen readers
     */
    function announceLanguageChange(lang) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = lang === LANG_ES ? 'Idioma cambiado a español' : 'Language changed to English';
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            if (announcement.parentNode) {
                document.body.removeChild(announcement);
            }
        }, 1000);
    }
    
    /**
     * Alterna entre idiomas
     */
    function toggleLanguage() {
        const currentLang = getCurrentLanguage();
        const newLang = currentLang === LANG_ES ? LANG_EN : LANG_ES;
        
        // Guardar la preferencia del usuario
        saveLanguage(newLang);
        // Marcar que el usuario cambió manualmente
        markAutoRedirectDone();
        // Anunciar el cambio
        announceLanguageChange(newLang);
        // Redirigir a la nueva versión
        redirectToLanguage(newLang);
    }
    
    /**
     * Realiza la detección automática de idioma en la primera visita
     */
    function autoDetectLanguage() {
        const savedLang = getSavedLanguage();
        const hasRedirected = hasAutoRedirected();
        const currentLang = getCurrentLanguage();
        
        // Si ya hay una preferencia guardada, usarla
        if (savedLang) {
            if (savedLang !== currentLang) {
                redirectToLanguage(savedLang);
            }
            return;
        }
        
        // Si ya se hizo el auto-redirect antes, no hacerlo de nuevo
        if (hasRedirected) {
            return;
        }
        
        // Detectar idioma del navegador y redirigir si es necesario
        const browserLang = detectBrowserLanguage();
        if (browserLang !== currentLang) {
            markAutoRedirectDone();
            saveLanguage(browserLang);
            redirectToLanguage(browserLang);
        } else {
            // Marcar que ya se hizo la detección
            markAutoRedirectDone();
            saveLanguage(currentLang);
        }
    }
    
    /**
     * Inicializa el sistema de idiomas
     */
    function init() {
        // Realizar auto-detección de idioma
        autoDetectLanguage();
        
        // Configurar el botón toggle cuando el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupToggleButton);
        } else {
            setupToggleButton();
        }
    }
    
    /**
     * Configura el evento del botón toggle
     */
    function setupToggleButton() {
        const btn = document.getElementById('language-toggle');
        if (btn) {
            btn.addEventListener('click', toggleLanguage);
            // Actualizar el estado inicial del botón
            const currentLang = getCurrentLanguage();
            updateToggleButton(currentLang);
        }
    }
    
    // Exponer funciones globalmente si se necesitan
    window.LanguageSwitcher = {
        toggle: toggleLanguage,
        getLanguage: getCurrentLanguage,
        setLanguage: (lang) => {
            saveLanguage(lang);
            redirectToLanguage(lang);
        }
    };
    
    // Iniciar inmediatamente
    init();
})();
