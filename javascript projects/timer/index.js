const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
  }

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

window.onload = () => {
    var min = document.getElementById('min');
    var sec = document.getElementById('sec');
    var mileS = 60;
    var onTimer = false;
    const button = document.getElementById('timer');

    button.addEventListener('click', async () => {
        onTimer = !onTimer;
        button.innerText = onTimer ? 'Остановить таймер' : 'Запустить таймер'
            while(true){
                if (onTimer === false || min.value <= 0 && sec.value <= 0) {
                    break
                }

                await delay(1);
    
                --mileS;
                if (mileS == 0) {
                    --sec.value;
                    mileS = 60;
                } else if (sec.value == 0) {
                    --min.value;
                    sec.value = 59;
                }
    
                if (min.value <= 0 && sec.value <= 0){
                    onTimer = false;
                    button.innerText = onTimer ? 'Остановить таймер' : 'Запустить таймер'
                    alert('Таймер завершил работу');
                    break;
                }
                console.group('Таймер')
                console.log('Минуты: ', min.value)
                console.log('Секунды: ', sec.value)
                console.log('Милисекунды: ', mileS)
                console.groupEnd()
           
        }

    })
    
}

