import addTodo from './addTodos';
import getTodo from './getTodos';


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
            
        default: 
            return null    
    }
}