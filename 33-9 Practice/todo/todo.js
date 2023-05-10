function loadTo_dos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayToDos(data));
}

function displayToDos(data) {
  const todoContainer = document.getElementById("todo-container");
  for (const todo of data) {
    console.log(todo);
    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = `
    
    <h2>User ID - ${todo.userId} </h2>
    <p>Title - ${todo.title} </p>
    <h3> completed or Not..??  - ${
      todo.completed === true ? "Completed" : "Not Completed"
    } </h3>
    
    `;

    todoContainer.appendChild(todoDiv);
  }
}

loadTo_dos();
