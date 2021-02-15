import {DynamoDB} from 'aws-sdk';
const documentClient = new DynamoDB.DocumentClient();

type Todo = {
    id: String
    title: String
    done: boolean
}

async function addTodo(todo: Todo) {
    const params = {
        TableName: process.env.TODOS_TABLE || '',
        Item: todo
    }
    try{
        await documentClient.put(params).promise()
        return todo
    }
    catch(error){
        console.log('DynamoDB error', error)
        return null
    }

}

export default addTodo