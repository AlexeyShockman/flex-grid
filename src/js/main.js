import $ from '../local_modules/jquery/dist/jquery.min'

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log(`document ready`)
    let $flex = document.querySelector('.flex');
    let $grid = document.querySelector('.grid');
    let $flexBtn = document.querySelector('.flex-btn');
    let $gridBtn = document.querySelector('.grid-btn');

    $flexBtn.addEventListener('click', function (){
        $grid.style.display = 'none';
        $flex.style.display = 'block';
    })

    $gridBtn.addEventListener('click', function (){
        $flex.style.display = 'none';
        $grid.style.display = 'block';
    })
})
