 document.getElementById('addTodo').addEventListener('click', async () => {
    const input = document.getElementById('todoText');
    const title = input.value;

    if (title) {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, completed: false})
        });
        const todo = await res.json();
        todoToHTML(todo);

        input.value = '';
    }
 })
 
 async function getAllTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos = await res.json();

    console.log(todos);
    todos.forEach(element => {
        todoToHTML(element)
    });
 }

 window.onload = ()=> {
    getAllTodos();
 }

 function todoToHTML({id, completed, title}) {
    const todoList = document.getElementById('todos');
    todoList.insertAdjacentHTML('beforeend', `            
        <div class="form-check" id=todo${id}>
                <label class="form-check-label">
                    <input onchange="toggleCompleteTodo(${id})" type="checkbox" class="form-check-input" ${completed ? 'checked': ''}>
                    ${title}
                </label>
                <button onclick="deleteTodo(${id})" id="delete" class="btn-close"></button>
            </div>`
        )
}

async function deleteTodo(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const data = await res.json();
    console.log(data)

    if (data) {
        document.getElementById(`todo${id}`).remove();
    }
}

async function toggleCompleteTodo(id) {
    const completed = document.querySelector(`#todo${id} input`).checked;

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({completed})
    })
    const data = await res.json();

    console.log(data);
    
}
