let heart = document.getElementsByClassName('heart')[0];
let player = document.getElementsByClassName('player')[0];
let card = document.getElementsByClassName('container')[0];
let arrow = document.getElementsByClassName('arrow-icon')[0];


heart.addEventListener('click', () => {
    heart.classList.remove('heart--default');
    heart.classList.add("heart--clicked");


    setTimeout(() => {
        heart.style.display = "none";
        player.classList.remove('hidden');
        arrow.classList.remove('hidden');

    }, 1000);

});


arrow.addEventListener('click', () => {
    player.classList.toggle('hidden');
    card.classList.toggle('hidden');
    arrow.classList.toggle('open')
    arrow.classList.toggle('arrow--pos')


});
