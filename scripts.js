//Get Elements from the DOM 
let taskInput = document.getElementById("task-input");
let addItemBtn = document.getElementById("add-item");

let tasksList = document.getElementById("task-list");
let tasksDone = document.getElementById("done-list");

let taskCount = document.getElementById("task-count");
let doneCount = document.getElementById("done-count")

let tasksTodoCount = 0;
let tasksDoneCount = 0;

//Handle form submit
function addTask() {
  addItemBtn.addEventListener("click", (event) =>{
    event.preventDefault();

    if(taskInput.value.trim() !== ""){
      tasksTodoCount++;
      taskCount.innerHTML = `Tasks - ${tasksTodoCount}`;
     

      tasksList.insertAdjacentHTML("beforeend", ` 
        <div class="todo-item">
          <p>${taskInput.value}</p>

          <div class="item-icons">
            <a class="icon"><img src="assets/check.svg" id="check" alt="A check icon"></a>
            <a class="icon"><img src="assets/trash.svg" id="delete" alt="A trash icon"></a>
          </div>
        
      </div>`);
    }
   
    taskInput.value = "";
  });

}
addTask();


//Delete the task
tasksList.addEventListener('click', (e) =>{

  if(e.target.id === 'delete') {
    const todoItem = e.target.parentElement.parentElement.parentElement;    
    tasksList.removeChild(todoItem);
    tasksTodoCount--;
    taskCount.innerHTML = `Tasks - ${tasksTodoCount}`;
  }
})

//Check tick the task
tasksList.addEventListener('click', (e) =>{
  if(e.target.id === 'check'){
    const todoItem = e.target.parentElement.parentElement.parentElement;    
    tasksList.removeChild(todoItem);
    tasksTodoCount--;
    taskCount.innerHTML = `Tasks - ${tasksTodoCount}`;

    tasksDoneCount++;
    doneCount.innerHTML = `Done - ${tasksDoneCount}`;

    
    tasksDone.insertAdjacentHTML("beforeend", ` 
      <div class="done-item">
        <p class="completed">${todoItem.children[0].textContent}</p>
        <a class="revert-icon"><img src="assets/revert.svg" id="revert" alt="A revert icon"></a>
    </div>`);
  }
})

//Revert the task
tasksDone.addEventListener('click', (e) =>{
  if(e.target.id === 'revert'){
    // const todoItem = e.target.parentElement.parentElement.parentElement;  
    const completedTask = e.target.parentElement.parentElement;
    completedTask.remove();
    tasksDoneCount--;
    doneCount.innerHTML = `Done - ${tasksDoneCount}`;
    

    tasksList.insertAdjacentHTML("beforeend", ` 
      <div class="todo-item">
        <p>${completedTask.children[0].textContent}</p>

        <div class="item-icons">
          <a class="icon"><img src="assets/check.svg" id="check" alt="A check icon"></a>
          <a class="icon"><img src="assets/trash.svg" id="delete" alt="A trash icon"></a>
        </div>
        
      </div>`);
    tasksTodoCount++;
    taskCount.innerHTML = `Tasks - ${tasksTodoCount}`;
  }
})



