const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasks = document.getElementById('tasks__list');

button.onclick = () => {
    console.log(tasks.innerHTML);
    if(input.value !=''){tasks.innerHTML +=
    `<div class="task">
    <div class="task__title">
      ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;    
    const a = Array.from(tasks.getElementsByClassName('task__remove'));
    a.forEach(element => {
        element.onclick = () => {tasks.removeChild(element.closest('div'))}
    });
    input.value = '';}
    return false;
}

function onkey(e) {
    if (e.key == 'Enter' && input.value != '') {
        console.log(tasks.innerHTML);
        tasks.innerHTML +=
        `<div class="task">
        <div class="task__title">
        ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`;
        input.value = "";        
        const a = Array.from(tasks.getElementsByClassName('task__remove'));
        a.forEach(element => {
        element.onclick = () => {tasks.removeChild(element.closest('div'))}
    });
    }
    
}

function down(e) {
    if(e.key == 'Enter') {e.preventDefault()}
}

input.addEventListener('keyup', onkey);
input.addEventListener('keydown', down);