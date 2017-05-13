class Task {

    constructor(title = ''){
        this.title = title;
        console.log('Создание задачи');
    }

}

let task = new Task('Жигульнуть пивца');

console.log(task.title);
