function modal() {
    // Modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function moreShow(event) {
        overlay.style.display = 'block';
        event.target.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function moreHide() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    }

    more.addEventListener('click', moreShow);
    close.addEventListener('click', moreHide);

    // Modal windows for tabs

    let moreTabs = document.querySelectorAll('.description-btn');
    for (let i = 0; i < moreTabs.length; i++) {
        moreTabs[i].addEventListener('click', moreShow);
    }
}

module.exports = modal;