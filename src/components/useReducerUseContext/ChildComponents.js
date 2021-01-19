import React from 'react'
import { ParentContext } from '../../views/UseReducerUseContext'
//Import type from Parent Component
import { SET_COUNT_DECREMENT, SET_COUNT_INCREMENT, SET_MESSAGE, SET_USERS } from "../../views/UseReducerUseContext";

function ChildComponent() {

    const { state, dispatch } = React.useContext(ParentContext)

    const handleChangeMessage = e => {
        dispatch({type: SET_MESSAGE, payload: e.target.value})
    }

    const handleChangeCount = (e, type) => {
        if (type === 'inc') dispatch({type: SET_COUNT_INCREMENT})
        if (type === 'dec') dispatch({type: SET_COUNT_DECREMENT})
    }

    return (
        <div className="mt-4">
            <div>
                <label htmlFor="text-use-state" className="form-label">Message</label>
                <input 
                    className="form-control" 
                    name="message"
                    onChange={handleChangeMessage} //Assing handleChangeMessage to change state message in context
                    placeholder="Input message"
                />

            </div>
            <div className="mt-4">
                <p style={{fontSize: '13px'}}>Message from reducer:<span style={{color: 'gold'}}> {state.message}</span></p>
            </div>
            <div>
                <label htmlFor="text-use-state" className="form-label mt-2">Count</label>
                <div>
                    <button className="btn btn-warning" onClick={(e) => handleChangeCount(e, 'inc')}>Increment</button>
                    <button className="btn btn-warning" onClick={(e) => handleChangeCount(e, 'dec')} style={{marginLeft: '20px'}}>Decrement</button>
                </div>
            </div>
            <div className="mt-4">
                <p style={{fontSize: '13px'}}>Count:<span style={{color: 'gold'}}> {state.count}</span></p>
            </div>
            <div className="mt-5">
               <h3>Users state from parent</h3>
               <ul className="mt-3">
                {state.users ? state.users.map(item => {
                    return <li key={item.id}>{item.name}, {item.email}</li>
                }) : ""}
               </ul>
            </div>
        </div>
    )
}

export default ChildComponent;