import { API, graphqlOperation } from "aws-amplify"
import React, { useEffect, useState } from "react"
import {getTodos} from "../graphql/queries"
import {addTodo} from "../graphql/mutations"
import {onAddProduct} from "../graphql/subscriptions"




interface incomingData {
    data : {
        getTodos : {
            id :string
            title : string
            done : boolean
        }
    }
}

const index = () => {
    const [subscriptionTitle , setSubscriptionTitle] = useState("")
    const subscription = API.graphql(graphqlOperation(onAddProduct)) as any

    const handleSubscription = () => {
        console.log("function invoked")
        subscription.subscribe({
            next : (status) => {
                console.log("new subscription>>>>" , status.value.data)
                setSubscriptionTitle(status.value.data.onAddProduct.title)
            }
        })
    }

    useEffect(() => {
        handleSubscription()
    }, [])

    return (
      <div>
            <h1>Hello World</h1>
            <button onClick = { async  () => {
                const data = await API.graphql({query: getTodos} );
                console.log(data)
                
            }} >Call Data</button>

            <button onClick = {async () => {
                const data = await API.graphql({
                    query:addTodo , 
                    variables : {
                        todo : {
                            id : `key${Math.random()}`,
                            title : "banana",
                            done : true
                        }
                    },
                } )
                console.log("data>>>" , data);
            }} >Add</button>

            <h1>{subscriptionTitle}</h1>

      </div>
    )
}



export default index