document.addEventListener('DOMContentLoaded', () => {
    const isHomePage = /index\.html$/i.test(window.location.pathname) || window.location.pathname === '/';

    if (!isHomePage) {
        return;
    }

    const popupHtml = `
        <div class="welcome-popup visible" id="welcomePopup" role="dialog" aria-modal="true" aria-labelledby="welcomeTitle">
            <div class="popup-content">
                <button class="popup-close" type="button" aria-label="Close welcome popup">×</button>
                <img src="images/Logo/logo.jpg" alt="Sweet Rise Bakery logo" class="popup-logo">
                <h2 id="welcomeTitle">Sweet Rise Bakery</h2>
                <p>Freshly baked. Made with love.</p>
                <button type="button" class="popup-button">Enter Website</button>
            </div>
        </div>
    `;

    const popup = document.createElement('div');
    popup.innerHTML = popupHtml;
    document.body.appendChild(popup.firstElementChild);

    const welcomePopup = document.getElementById('welcomePopup');
    const closeButton = document.querySelector('.popup-close');
    const enterButton = document.querySelector('.popup-button');

    const hidePopup = () => {
        welcomePopup.classList.remove('visible');
    };

    closeButton.addEventListener('click', hidePopup);
    enterButton.addEventListener('click', hidePopup);

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            hidePopup();
        }
    });
});
