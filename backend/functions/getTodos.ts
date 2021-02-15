import {DynamoDB} from 'aws-sdk';
const documentClient = new DynamoDB.DocumentClient();

async function getTodos() {
    const params = {
        TableName: process.env.TODOS_TABLE || '',
    }
    try{
        const data = await documentClient.scan(params).promise()
        return data.Items
    }
    catch(error){
        console.log('DynamoDB error', error)
        return null
    }
}

export default getTodos;
