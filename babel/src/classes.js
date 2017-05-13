class Task {

    constructor(title = ''){
        this.title = title;
        this.done = false;
        Task.count += 1;
        console.log('Создание задачи');
    }

    complete(){
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }
}

Task.count = 0;

let task = new Task('Жигульнуть пивца');
let task2 = new Task('Пивнуть жигульца');

console.log(task.title);
console.log(task2.title);
console.log(Task.count);
task2.complete();
