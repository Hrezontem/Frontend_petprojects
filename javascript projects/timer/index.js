const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
  }

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

function notifyMe() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("Hi there!");
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const notification = new Notification("Hi there!");
          // …
        }
      });
    }
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
                    notifyMe();
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

