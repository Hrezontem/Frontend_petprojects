document.addEventListener("DOMContentLoaded", () => {
    const gameItem = document.querySelectorAll('.game__item');
    const resetBtn = document.querySelector('.reset');
    let turn = false;
    let gameMap = [];

    for(let i = 0; i < 3; i++){
        gameMap[i] = [];
        for(let j = 0; j < 3; j++){
            gameMap[i][j] = gameItem[j];
        }
    }

    gameItem.forEach((item) => {
        let flag = false;
         item.addEventListener('click', function clickTTT(){
            if (flag === false){
                item.innerHTML = (turn == false) ? 'X': 'O'
                turn = !turn;
            }
 
            if(flag === false){
                for(let i = 0; i < gameMap.length; i++){
                    for(let j = 0; j < gameMap[i].length; j++){
                            console.log('WIN')
                    }
                }
            }
            flag = true

        })
        resetBtn.addEventListener('click', () => {
            turn = false;
            flag = false;
            item.innerHTML = '';
        })
    })
});