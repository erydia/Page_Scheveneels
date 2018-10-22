const init = () => {
    // Pobieranie elementów reprezentujących wyniki z drzewa DOM.
    const hiddenMenuEl = document.querySelector('.navbar-menu');
    const menuButtonEl = document.querySelector('.menu-button');

    // Obsługa kliknięcia, które powoduje wysuwanie się menu z lewej strony.
    menuButtonEl.addEventListener('click', () => {
        document.body.classList.add('is-overlayed');
        hiddenMenuEl.classList.add('is-open');
    });

    // Obsługa kliknięcia, które powoduje chowanie się menu.
    document.addEventListener('click', (ev) => {
        const clickedEl = ev.target;

        const ensureElementDoesntMatch = (selector) => {
            return !clickedEl.matches(selector);
        }
        
        const navbarShouldClose = (
            ensureElementDoesntMatch('.navbar-menu') &&
            ensureElementDoesntMatch('.menu-button') && 
            ensureElementDoesntMatch('.navbar-menu_image')
        );

        if (navbarShouldClose) {
            document.body.classList.remove('is-overlayed');
            hiddenMenuEl.classList.remove('is-open');
        };
    });
    
    document.removeEventListener('DOMContentLoaded', init);
};

document.addEventListener('DOMContentLoaded', init);


