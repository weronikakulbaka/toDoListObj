class Input {
    constructor(task){
        let _task = task;
        this.getTask = () => _task;
        this.checkIfCanAddTask = task => {
            if(task==="") return false;
            else return true;
        }
    }
}