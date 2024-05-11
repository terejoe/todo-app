//Get Elements from the DOM 
let taskInput = document.getElementById("task-input");
let addItemBtn = document.getElementById("add-item");
let tasksList = document.getElementById(".task-list");
let tasksTodo = document.querySelector(".task-todo");
let item =[];
let num = item.length;

//Handle form submit
function addTask() {
  addItemBtn.addEventListener("click", (event) =>{
    event.preventDefault();

    if(taskInput.value.trim() !== ""){

      tasksTodo.insertAdjacentHTML("beforeend", ` 
        <p class="task-text">Tasks to do - ${num}</p>

        <div class="todo-item">
          <p>${taskInput.value}</p>

          <div class="item-icons">
            <a class="icon"><img src="assets/check.svg" alt="A check icon"></a>
            <a class="icon"><img src="assets/trash.svg" alt="A trash icon"></a>
          </div>
        
      </div>`);
    }
    item.push(taskInput.value);
    num++;
    taskInput.value = "";
  });
  
  
  // parag.appendChild(text);
  // tasksTodo.appendChild(parag)
  console.log(taskInput.value);
  console.log(num);
  console.log(item)
  console.log(tasksTodo)
}
addTask()

