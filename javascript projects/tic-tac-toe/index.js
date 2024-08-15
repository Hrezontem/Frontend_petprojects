

document.addEventListener("DOMContentLoaded", () => {
    const gameItem = Array.from(document.querySelectorAll('.game__item'));
    const resetBtn = document.querySelector('.reset');
    const text = document.querySelector('.text')
    let turn = false;
    let endGame = false;
    let indexGameItem = 0;
    let gameMapDiagonal = []; 
    let gameMapDiagonalReverse = []; 
    let gameMapVertical;
    let gameMapHorizontal = [
        [],
        [],
        []
    ];
    for(let i = 0; i < gameMapHorizontal.length; i++){
        for(let j = 0; j < 3; j++){
            gameMapHorizontal[i].push(gameItem[indexGameItem]);
            indexGameItem++;
        }
    }
    console.log(gameMapHorizontal)
    for (let row = 0; row < gameMapHorizontal.length; row++) {
        gameMapDiagonal.push(gameMapHorizontal[row][row]);
        gameMapDiagonalReverse.push(gameMapHorizontal[row][gameMapHorizontal.length - row - 1]);
    }
    console.log(gameMapDiagonalReverse)
    gameMapVertical = gameMapHorizontal.map((val, index) => gameMapHorizontal.map(row => row[index]).reverse())
    gameItem.forEach((item) => {
        let flag = false;
        item.addEventListener('click', function clickTTT(){
            if (flag === false && endGame === false){
                item.innerHTML = (turn == false) ? 'X': 'O'
                turn = !turn;
                for (var i = 0; i < 2; i++){
                    if ((gameMapHorizontal[i].every(v => v.innerHTML === 'X')) === true || (gameMapHorizontal[i].every(v => v.innerHTML === 'O')) === true) {
                        console.log('WIN')
                        console.log(turn)
                        endGame = true
                        break
                    }
                    else if ((gameMapVertical[i].every(v => v.innerHTML === 'X')) === true || (gameMapVertical[i].every(v => v.innerHTML === 'O')) === true) {
                        console.log('WIN')
                        console.log(turn)
                        endGame = true
                        break
                    }
                    else if ((gameMapDiagonal.every(v => v.innerHTML === 'X')) === true || (gameMapDiagonal.every(v => v.innerHTML === 'O')) === true) {
                        console.log('WIN')
                        console.log(turn)
                        endGame = true
                        break
                    }
                    else if ((gameMapDiagonalReverse.every(v => v.innerHTML === 'X')) === true || (gameMapDiagonalReverse.every(v => v.innerHTML === 'O')) === true) {
                        console.log('WIN')
                        console.log(turn)
                        endGame = true
                        break
                    }
                }
                flag = true
            }
            if(endGame === true){
                if(turn === true) {
                    text.innerHTML = 'Выиграл X'
                }
                if(turn === false) {
                    text.innerHTML = 'Выиграл O'
                }
            }

        })
        resetBtn.addEventListener('click', () => {
            turn = false;
            flag = false;
            endGame = false
            text.innerHTML = ''
            item.innerHTML = '';
        })
    })
    
});