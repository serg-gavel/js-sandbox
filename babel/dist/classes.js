'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, Task);

    this.title = title;
    console.log('Создание задачи');
};

var task = new Task('Жигульнуть пивца');

console.log(task.title);