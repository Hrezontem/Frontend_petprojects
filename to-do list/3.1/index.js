window.onload = () =>{
  const buttonAdd = document.getElementById('insert-btn')
  const list = document.getElementById('list')
  const input = document.getElementById('input')
  const buttonDelete = document.getElementById('delete-btn')
  const emptyList = document.getElementById('empty')

  let num = 0
  buttonAdd.addEventListener('click', () =>{
    if(input.value.length > 1){
      const listitem = document.createElement("li")
      listitem.className = 'todo-list__item'
      num++
      listitem.innerHTML = `  
          <span>${input.value.trim()}</span>
          <button class="todo-list__item__delete"></button>
       `
        listitem.querySelector(".todo-list__item__delete").addEventListener('click', () =>{
          list.removeChild(listitem)
          num--
          if(num < 1){
            emptyList.hidden = false
          }
        })
        if(num > 0){
          emptyList.hidden = true 
  
        }
      list.appendChild(listitem)
      input.value = ''
    }

  })
  input.addEventListener('keyup', (event) => {
    if(event.key == "Enter"){
      buttonAdd.click()
    }
  })
}
