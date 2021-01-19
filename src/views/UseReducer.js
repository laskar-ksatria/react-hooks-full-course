import React from 'react'

const initialState = {
    message: "",
    sendMessage: ""
}

const SET_MESSAGE = 'SET_MESSAGE'
const SET_SENDMESSAGE = 'SET_SENDMESSAGE'

const reducer = (state, action) => {
    let { type, payload } = action;
    switch(type) {
        case SET_MESSAGE: 
            return {...state, message: payload}
        case SET_SENDMESSAGE:
            return {...state, sendMessage: payload}
        default:
            return state;
    }
}

function UseReducer() {

    const [state, dispatch] = React.useReducer(reducer, initialState)

    const [textState, setTextState] = React.useState("")

    const handleChangeText = (e) => {
        setTextState(e.target.value)
    }

    const handleChangeMessage = e => {
        dispatch({type: SET_MESSAGE, payload: e.target.value})
    }

    const handleClick = () => {
        dispatch({type: SET_SENDMESSAGE, payload: textState})
    }

    return (
        <>
            <div className="hooks-content mt-5">
                <div>
                    <h3 className="text-center text-decoration-underline">useReducer</h3>
                    <div className="mt-4">
                        <div className="mt-4">
                            <input 
                                className="form-control" 
                                onChange={handleChangeMessage}
                                placeholder="Input Message"
                            />
                        </div>
                        <div className="mt-4">
                            <p style={{fontSize: '13px'}}>Message from reducer:<span style={{color: 'gold'}}> {state.message}</span></p>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="text-use-state" className="form-label mt-2">Send Message</label>
                            <textarea 
                                className="form-control" 
                                placeholder="Input text"
                                onChange={handleChangeText}
                            />
                            <div style={{justifyContent: 'center', paddingTop: '20px', width: '100%',display: 'flex', alignItems: 'center'}}>
                                <button className="btn btn-outline-warning" onClick={handleClick}>Send</button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p style={{fontSize: '13px'}}>Your message send:<span style={{color: 'gold'}}> {state.sendMessage}</span></p>
                        </div>
                    </div>
                    <div style={{marginTop: '50px'}}>a
                        <a href="https://github.com/laskar-ksatria/react-hooks-full-course/blob/main/src/views/UseReducer.js">See source code on github</a>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default UseReducer;