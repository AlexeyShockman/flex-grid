import $ from '../local_modules/jquery/dist/jquery.min'

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log(`document ready`)
    const $flex = document.querySelector('.flex');
    const $grid = document.querySelector('.grid');
    const $flexBtn = document.querySelector('.flex-btn');
    const $gridBtn = document.querySelector('.grid-btn');
    const $contentBtn = document.querySelector('.content-btn')

    $flexBtn.addEventListener('click', function(event) {
        $grid.style.display = 'none';
        $flex.style.display = 'block';
        changeActiveBtn(event)
    })

    $gridBtn.addEventListener('click', function(event) {
        $flex.style.display = 'none';
        $grid.style.display = 'block';
        changeActiveBtn(event)
    })

    $contentBtn.addEventListener('click', changeCardContet);

    window.addEventListener('resize', changeCardContet);

    function changeActiveBtn(e) {
        let $allBtns = document.querySelectorAll('.style-switcher > button');
        $allBtns.forEach(e => e.classList.remove('active'));
        $allBtns.forEach(e => e.classList.add('disable'));
        e.currentTarget.classList.add('active')
        e.currentTarget.classList.remove('disable')
    }


    function changeCardContet () {
        const $cards = document.querySelectorAll('.card');
        $cards.forEach(function (card) {
            const $cardText = card.querySelector('.card-main-text');
            const $cardTitle = card.querySelector('.card-main-title');
            const $cardHref = card.querySelector('a')
            const w = card.offsetWidth;
            if (w < 280) {
                $cardText.innerHTML = '<p style="color: red; font-weight: 900; font-size: 32px;">alert!</p>';
            } else {
                $cardText.innerText = `width ${w}px`;
            }
            $cardTitle.innerText = card.classList[1];
            $cardHref.innerText = 'link';
        })
    }
})
