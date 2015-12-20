materialAdmin
// =========================================================================
// Todo List Widget
// =========================================================================

.controller('todoCtrl', function(todoService){

    //Get Todo List Widget Data
    this.todo = todoService.todo;

    this.tdResult = todoService.getTodo(this.todo);

    //Add new Item (closed by default)
    this.addTodoStat = 0;

    //Dismiss
    this.clearTodo = function(event) {
        this.addTodoStat = 0;
        this.todo = '';
    }
})
