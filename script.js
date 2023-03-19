const container = document.querySelector('.container');
const turnBox = document.querySelectorAll('.turnBox')


let playerTurn = true;

container.addEventListener('click', function(e) {
    

    if(e.target.classList.contains('box') && playerTurn === true && !e.target.classList.contains('lock')) {
        e.target.classList.add('circle');
        e.target.classList.remove('X');
        e.target.classList.add('lock');
        playerTurn = false;
        changePlayer();
    } else if(e.target.classList.contains('box') && playerTurn === false && !e.target.classList.contains('lock')) {
        e.target.classList.add('X');
        e.target.classList.remove('circle');
        e.target.classList.add('lock');
        playerTurn = true;
        changePlayer();
    }
})

function changePlayer() {
    turnBox.forEach(function(item) {
        item.classList.toggle('turn');
        item.classList.toggle('not-turn');
    })
}