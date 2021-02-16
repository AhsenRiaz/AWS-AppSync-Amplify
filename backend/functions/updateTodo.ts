import {DynamoDB} from 'aws-sdk';
const documentClient = new DynamoDB.DocumentClient();

type Params = {
    TableName: string  ,
    Key:  {},
    ExpressionAttributeValues: any,
    ExpressionAttributeNames: any,
    UpdateExpression: string,
    ReturnValues: string
}

type Todo = {
    id: String
    title: String
    done: boolean
}


const updateTodo = async (todo : Todo) => {
    const params:Params = {
        TableName : process.env.TODOS_TABLE || '',
        Key : {
            id : todo.id
        },
        ExpressionAttributeValues: {},
        ExpressionAttributeNames: {},
        UpdateExpression: "",
        ReturnValues: "UPDATED_NEW"
    }

    try {
        await documentClient.update(params).promise()
        return todo
    }
    catch(err){
        return null
    }

}

export default updateTodo
