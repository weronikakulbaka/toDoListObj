class State{
    static check(task){
        task.addEventListener('click', () => {
            task.classList.toggle('checked');
        })
    }

    static delete(close, task, boardOfTask){
        close.addEventListener('click', () => {
            boardOfTask.removeChild(task);
        })
    }
}