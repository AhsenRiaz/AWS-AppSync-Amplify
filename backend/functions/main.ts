import addTodo from './addTodos';
import getTodo from './getTodos';
import updateTodo from './updateTodo';


type AppSyncEvent = {
    info:{
        fieldName: String
    },
    arguments: {
        todoId: String,
        todo: Todo
    }
}

type Todo = {
    id: String
    title: String
    done: boolean
}

exports.handler = async (event:AppSyncEvent) => {
    switch(event.info.fieldName){
        case "addTodo":
            return await addTodo(event.arguments.todo);
        case "getTodos":
            return await getTodo();
        case "updateTodo":
            return await updateTodo(event.arguments.todo)
        default: 
            return null    
    }
}