/**
 * Theme Toggle - Light/Dark Mode Switcher
 * Maneja la persistencia y cambio entre temas claro y oscuro
 */
(function() {
    'use strict';
    
    // Constantes
    const STORAGE_KEY = 'bairescoding-theme';
    const THEME_LIGHT = 'light';
    const THEME_DARK = 'dark';
    
    /**
     * Obtiene el tema guardado o la preferencia del sistema
     */
    function getSavedTheme() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                return saved;
            }
        } catch (e) {
            console.warn('No se pudo acceder a localStorage:', e);
        }
        
        // Si no hay tema guardado, detectar preferencia del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return THEME_LIGHT;
        }
        
        return THEME_DARK; // Default
    }
    
    /**
     * Guarda el tema seleccionado
     */
    function saveTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {
            console.warn('No se pudo guardar el tema:', e);
        }
    }
    
    /**
     * Aplica el tema al documento
     */
    function applyTheme(theme) {
        const html = document.documentElement;
        
        if (theme === THEME_LIGHT) {
            html.setAttribute('data-theme', THEME_LIGHT);
        } else {
            html.removeAttribute('data-theme');
        }
        
        // Actualizar el estado del botón si existe
        updateToggleButton(theme);
    }
    
    /**
     * Actualiza la apariencia del botón toggle
     */
    function updateToggleButton(theme) {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        
        const iconSun = btn.querySelector('.icon-sun');
        const iconMoon = btn.querySelector('.icon-moon');
        
        if (theme === THEME_LIGHT) {
            if (iconSun) iconSun.style.display = 'block';
            if (iconMoon) iconMoon.style.display = 'none';
            btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
            btn.setAttribute('title', 'Cambiar a modo oscuro');
        } else {
            if (iconSun) iconSun.style.display = 'none';
            if (iconMoon) iconMoon.style.display = 'block';
            btn.setAttribute('aria-label', 'Cambiar a modo claro');
            btn.setAttribute('title', 'Cambiar a modo claro');
        }
    }
    
    /**
     * Alterna entre temas
     */
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
        
        applyTheme(newTheme);
        saveTheme(newTheme);
    }
    
    /**
     * Inicializa el sistema de temas
     */
    function init() {
        // Aplicar tema guardado inmediatamente para evitar flash
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);
        
        // Escuchar cambios en la preferencia del sistema
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
                // Solo cambiar si el usuario no ha guardado una preferencia manual
                try {
                    const hasManualPreference = localStorage.getItem(STORAGE_KEY);
                    if (!hasManualPreference) {
                        applyTheme(e.matches ? THEME_LIGHT : THEME_DARK);
                    }
                } catch (e) {
                    // Ignorar errores de localStorage
                }
            });
        }
        
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
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', toggleTheme);
            // Actualizar el estado inicial del botón
            const currentTheme = document.documentElement.getAttribute('data-theme') || THEME_DARK;
            updateToggleButton(currentTheme);
        }
    }
    
    // Exponer funciones globalmente si se necesitan
    window.ThemeToggle = {
        toggle: toggleTheme,
        getTheme: () => document.documentElement.getAttribute('data-theme') || THEME_DARK,
        setTheme: (theme) => {
            applyTheme(theme);
            saveTheme(theme);
        }
    };
    
    // Iniciar inmediatamente
    init();
})();
