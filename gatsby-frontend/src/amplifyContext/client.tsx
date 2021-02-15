import React from "react"
import {Amplify} from "aws-amplify"
import awsmobile from "../aws-export"

const client = ({element}) => {
    Amplify.configure(awsmobile)
    return (
        <div>
            {element}
        </div>
    )
}

export default client