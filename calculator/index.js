window.onload = () => {
    const num_btns = document.querySelectorAll('.num-btns__item')
    const action_btns = document.querySelectorAll('.action-btn')
    const input = document.querySelector('.input')
    const equal = document.querySelector('.equal')
    const dot = document.querySelector('.dot')
    const deleteSymbol = document.querySelector('.delete-symbol')
    const deleteAll = document.querySelector('.delete-all')
    var a, b, c;
    var action;
    console.log(input)
    equal.disabled = true
    num_btns.forEach((item) => {
        item.addEventListener('click', () => {
            input.value += item.innerHTML
        })
    })
    action_btns.forEach((item) => {
        item.addEventListener('click', () => {
            action = item.innerHTML
            a = Number(input.value)
            input.value = ''
            equal.disabled = false
        })
    })
    equal.addEventListener('click', () =>{
        b = Number(input.value)

        if(action == '/'){
            c = a/b
        }
        else if(action == '+'){
            c  = a+b
            
        }
        else if(action == '-'){
            c = a-b
            
        }
        else if(action == '*'){
            c = a*b
            
        }
        input.value = c
    })
    deleteSymbol.addEventListener('click', () => {
        input.value = input.value.slice(0, -1)
        if(input.value < 1){
            equal.disabled = true
        }
    })
    deleteAll.addEventListener('click', () => {
        input.value = ''
        equal.disabled = true
    })
    dot.addEventListener('click', () => {
        if (!input.value.includes(dot.innerHTML)) {
            input.value += dot.innerHTML
        }
    })

}