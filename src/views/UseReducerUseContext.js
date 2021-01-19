import React from 'react'
import ChildComponent from '../components/useReducerUseContext/ChildComponents'

//Define initialState
const initialState = {
    message: "",
    count: 0,
    users: null
}

//Define type
export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_COUNT_INCREMENT = 'SET_COUNT_INCREMENT'
export const SET_COUNT_DECREMENT = 'SET_COUNT_DECREMENT'
export const SET_USERS = 'SET_USERS'

//CreateContext from react
export const ParentContext = React.createContext()

//Create reducer
const reducer = (state, action) => {
    let { type, payload } = action;
    switch(type) {
        case SET_MESSAGE: 
            return {...state, message: payload}
        case SET_COUNT_INCREMENT: 
            return {...state, count: state.count + 1};
        case SET_COUNT_DECREMENT:
            return {...state, count: state.count - 1}
        case SET_USERS:
            return {...state, users: payload}
        default:
            return state;
    }
}

function UseReducerUseContext() {

    const [state, dispatch] = React.useReducer(reducer, initialState)

    //Fetch data immidiately when component load
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: SET_USERS, payload: data}));
    }, [])

    return (
        //CreateProvider
        <ParentContext.Provider value={{state, dispatch}}>
            <div className="hooks-content mt-5">
                <div>
                    <h2 className="text-center text-decoration-underline">useReducer & useContext</h2>
                    <a href="https://github.com/laskar-ksatria/react-hooks-full-course/blob/main/src/views/UseReducerUseContext.js">See source code on github</a>
                    <ChildComponent />
                </div>
            </div>
        </ParentContext.Provider>
    )
}

export default UseReducerUseContext;