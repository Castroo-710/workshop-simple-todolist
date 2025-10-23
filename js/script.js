// 1. DOM referenser
const todoList = document.getElementById("todos");
const input = document.getElementById("input");
const todoForm = document.getElementById("todoForm");




// 2. Eventlyssnare - När ett formulär submittas anropa funktion addTodo()
document.addEventListener("submit", addTodo);



// 3. Börja med en tom array på todos
// samt ett id som börjar på noll
let tasks = [];
let id = 0;




// 4. Lägg till en Todo som ett objekt  i arrayen todos
function addTodo(event) {
    const text = input.value.trim();
    event.preventDefault();
    if (!text) return;
    const newTodo = {
        id: id++,
        text,
        completed: false,
    };

    tasks.push(newTodo);
    input.value = "";
    renderList();
}



// 5. Funktion som renderar listan på index.html varje gång listan förändraas
function renderList() {
    todoList.innerHTML = "";

    tasks.forEach((todo, index) => {
    const li = document.createElement("li");
    li.dataset.id = String(todoForm.id);
    li.dataset.id = index;
    li.className = "todo-item";
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.className = "todo-checkbox";

    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        renderList();
    });
    
    const textSpan = document.createElement("span");
    textSpan.className = "todo-text";
    textSpan.textContent = todo.text;
    if (todo.completed) {
        textSpan.classList.add("completed");
        }


        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.className = "remove-btn btn-danger";

        removeBtn.addEventListener("click", () =>{
            tasks.splice(index, 1);
            renderList();
        });
        
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(removeBtn);
        todoList.appendChild(li);
        
        
    });
}



// BONUS! Uppdatera eller ta bort en Todo. Använd er av s.k event delegation
todoList.addEventListener('click', function(event) {
        // Element som klickades på i listan
        console.log(event.target);

        // Om man texten klickas => anropa toggleTodoCompletion

        // Eller om close-knappen klickas => anrop deleteTOto

});


// Bonus! Uppdatera en todo med visst id. Toggle "completed"
function toggleTodoCompletion(id) {
    const todo = todoList.firstElementChild((t) => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderList();
    }

}



// Bonus
function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  renderList();
}




