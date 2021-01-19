import React from 'react'
import ContextComponent from '../components/useContext/ContextComponent'

const initialState = [
    {
        username: "John",
        email: "john@mail.com"
    },
    {
        username: "Doe",
        email: "doe@mail.com"
    },
    {
        username: "jane",
        email: "jane@mail.com"
    }
]

export const StateContext = React.createContext()

function UseContext() {

    return(
        <StateContext.Provider value={{ sendContext: initialState }}>
            <div className="mt-4 text-light" style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <div>
                    <h2 className="text-center">UseContext</h2>
                    <div>
                        <a href="https://github.com/laskar-ksatria/react-hooks-full-course/blob/main/src/views/UseContext.js">See source code on github</a>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px', color: 'white'}}>
                <div>
                    <h2 style={{textAlign: 'center'}}>Parent Component</h2>
                    {initialState.map((item, index) => <li key={index}>{item.username}, {item.email}</li>)}
                    <div style={{marginTop: '100px'}}>
                        <h2 style={{textAlign: 'center'}}>Child Component</h2>
                        <ContextComponent />
                        <p style={{fontSize: '10px'}}>*This data get from context</p>
                    </div>
                </div>
            </div>
        </StateContext.Provider>
    )
}

export default UseContext