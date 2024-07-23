document.addEventListener("DOMContentLoaded", () => {
    const gameItem = document.querySelectorAll('.game__item');
    const resetBtn = document.querySelector('.reset');
    let turn = false;
    let gameMap = [
        [],
        [],
        []
    ];
    console.log(gameItem)

    gameItem.forEach((item) => {
        let flag = false;
        // for(let i = 0; i < gameMap.length; i++){
        //     for(let j = 0; j < 3; j++){
        //         gameMap[i][j] = item;
        //         console.log(gameMap)
        //     }
        // }
        item.addEventListener('click', function clickTTT(){
            if (flag === false){
                item.innerHTML = (turn == false) ? 'X': 'O'
                turn = !turn;
            }
 
            if(flag === false){
                for(let i = 0; i < gameMap.length; i++){
                    for(let j = 0; j < gameMap[i].length; j++){
                            console.log(gameMap[i][j])
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