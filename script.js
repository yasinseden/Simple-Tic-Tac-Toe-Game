const container = document.querySelector('.container');
const turnBox = document.querySelectorAll('.turnBox')
const boxes = document.querySelectorAll('.box');
let theWinner = document.querySelector('.theWinner');

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

    theWinnerIs();
})

function changePlayer() {
    turnBox.forEach(function(item) {
        item.classList.toggle('turn');
        item.classList.toggle('not-turn');
    })
}


// theWinnerIs fonksiyonu chatCPT yardımıyla kuruldu ve üzerine eklemeler ve düzeltmeler yapılarak bir kazanan belirlendiğinde bütün kutulara .lock classı eklendi
function theWinnerIs() {
    
    // Define all possible winning combinations
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    // Check all possible winning combinations
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (boxes[a].classList.contains('circle') &&
          boxes[b].classList.contains('circle') &&
          boxes[c].classList.contains('circle')) {
        // Circle wins
        theWinner.innerHTML = "The winner is 'O'";
        boxes.forEach(function(box) {
            box.classList.add('lock');
        })
        return;
      } else if (boxes[a].classList.contains('X') &&
                 boxes[b].classList.contains('X') &&
                 boxes[c].classList.contains('X')) {
        // X wins
        theWinner.innerHTML = "The winner is 'X'";
        boxes.forEach(function(box) {
            box.classList.add('lock');
        })
        return;
      }
    }
  
    // Check for tie game
    let count = 0;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].classList.contains('lock')) {
        count++;
      }
    }
    if (count === boxes.length) {
        theWinner.innerHTML = "It's a Tie"
    }
  }
  