import React from 'react'
import { StateContext } from '../../views/UseContext'

function ContextComponent() {

    const { sendContext } = React.useContext(StateContext)

    return (
        <div>
            <ul>
                {sendContext.map((item, index) => {
                    return <li key={index}>Username: {item.username}, email: {item.email}</li>
                })}
            </ul>
        </div>
    )
    
}

export default ContextComponent