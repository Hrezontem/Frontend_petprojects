function randomInteger(min, max) {
    let rand = min + Math.random() * max;
    return Math.floor(rand);
  }

  const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
  }

function randomColor() {
    const colorHexChar = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    var color = '#'
    for (var i = 0; i < 6; i++){
        color += colorHexChar[randomInteger(0,15)];
    }
    return color;
}

const turn = (flag) => {
    return function() {
        return !flag 
    }
}


window.onload = () => {
    var body = document.querySelector('body');
    var btn = document.getElementById('btn-color');
    var flag = false;
    
    btn.addEventListener('click',  async () => {
        flag = !flag;
        while (flag === true) {
            await delay(300)
            body.setAttribute('style', `background-color: ${randomColor()};`);
        }
    })
}


