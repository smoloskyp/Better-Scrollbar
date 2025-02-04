const applyStyles = () => {
    function getBackgroundColor() {
        let bgColor = window.getComputedStyle(document.body).backgroundColor;
        
        // Якщо фон прозорий, пробуємо отримати фон з `html`
        if (bgColor === "rgba(0, 0, 0, 0)") {
            bgColor = window.getComputedStyle(document.documentElement).backgroundColor;
        }

        return bgColor;
    }
    
    const BGcolor = getBackgroundColor();

    const style = document.createElement('style');
    style.textContent = `
        :root {
            --scrollbar-track: ${BGcolor};
            --scrollbar-thumb: #b1b1b1;
            --scrollbar-thumb-hover:rgb(133, 132, 132);
        }

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background-color: var(--scrollbar-track) !important;
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--scrollbar-thumb) !important;
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: var(--scrollbar-thumb-hover) !important;
        }
    `;

    document.head.appendChild(style);
};

// Чекаємо на завантаження `document.head`
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyStyles);
} else {
    applyStyles();
}
