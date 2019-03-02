class ToDoList{
    constructor(task){
        this.input = new Input(task);
        document.querySelector('.input-group-addon').addEventListener('click', this.listOfTasks.bind(this));
        window.addEventListener('keydown', this.keyClick.bind(this));
        this.inuptTask = document.getElementById('task');
        this.ul = document.getElementById('toDoList');
    }

    addTask(task = this.input.getTask()){
        this.li = document.createElement('li')
        this.li.classList.add('list-group-item');
        this.li.textContent = task;
        
        this.span = document.createElement('span');
        this.span.classList.add('close');
        this.span.textContent = "\u00D7";
        this.li.appendChild(this.span);

        this.ul.appendChild(this.li);
        
        State.delete(this.span, this.li, this.ul);
        return this.li;
    }

    listOfTasks(){
        let task = this.inuptTask.value;
        if(this.input.checkIfCanAddTask(task)) {
            let addedTask = this.addTask(task);
            State.check(addedTask);
            this.inuptTask.value = '';
        }
        else return alert("Nie możesz dodać pustego zadania!");
    }

    keyClick(e){
        if(e.keyCode === 13){
            e.preventDefault();
            this.listOfTasks();
        }    
    }

   
}