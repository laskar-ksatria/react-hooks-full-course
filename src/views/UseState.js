import React, { useState } from 'react'

function UseState() {

    //First in array is a state, and the second is method to change state
    const [state, setState] = useState({name: "", address: ""})

    //Define function to change state
    const handleChange = e => {
        let value = e.target.value
        let name = e.target.name
        setState({...state, [name]: value})
    }

    return (
        <>
            <div className="hooks-content mt-5">
                <div>
                    <h2 className="text-center text-decoration-underline">useState</h2>
                    <div className="mt-4">
                        <div>
                            <label htmlFor="text-use-state" className="form-label">Name</label>
                            <input 
                                className="form-control" 
                                name="name"
                                value={state.name}
                                //Put the handleChange here
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="text-use-state" className="form-label mt-2">Address</label>
                            <textarea 
                                className="form-control" 
                                name="address"
                                value={state.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-5">
                            <p>
                                Name: <span style={{color:'gold', fontWeight: 'bold'}}>{state.name}</span>
                            </p>
                            <p>
                                Address: <span style={{color: 'gold', fontWeight: 'bold'}}>{state.address}</span>
                            </p>
                        </div>
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <a href="https://github.com/laskar-ksatria/react-hooks-full-course">See source code on github</a>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default UseState;