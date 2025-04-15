// Array für Todos erstellen
let todos = [];

// Laden der gespeicherten Todos beim Start
window.onload = function() {
    loadTodos();
};

function addTodo() {
    // Neues Todo zum Array hinzufügen
    todos.push({
        text: todoField.value,
        completed: false
    });
    
    // Speichern und Anzeigen
    saveTodos();
    renderTodos();
    todoField.value = '';
}

function saveTodos() {
    // Speichern im localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    // Laden aus localStorage
    const saved = localStorage.getItem('todos');
    todos = saved ? JSON.parse(saved) : [];
    renderTodos();
}

function renderTodos() {
    // Liste neu rendern
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        todoList.innerHTML += `
            <li>
                <input type="checkbox" ${todo.completed ? 'checked' : ''} 
                       onclick="toggleTodo(${index})">
                ${todo.text}
            </li>`;
    });
}

function deleteSelected() {
    // Filtere die nicht-erledigten Todos
    todos = todos.filter(todo => !todo.completed);
    // Speichern und neu rendern
    saveTodos();
    renderTodos();
}

function toggleTodo(index) {
    // Checkbox-Status umschalten
    todos[index].completed = !todos[index].completed;
    saveTodos();
}