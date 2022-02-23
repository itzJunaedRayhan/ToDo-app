let newTask = document.querySelector('#newtask input');

//  toDo Function
function todo () {
    if (newTask.value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
            ${newTask.value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;

        //  delete task when click on delete Icon  :
        let current_task = document.querySelectorAll('.delete');
        for (let i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        //  done task when click on task:   
        let tasks = document.querySelectorAll('.task');   
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            }
        }

        //  clear input field when task added:
        newTask.value = "";
    }
}




//  When user click Add button:
document.querySelector('#push').addEventListener('click', todo)


//  When user Press Enter:
document.querySelector('#newtask input').addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        todo();
    }
})