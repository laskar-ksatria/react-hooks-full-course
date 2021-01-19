import React from 'react'

function UseRef() {

    const [state, setState] = React.useState({firstName: "", lastName: "", email: ""})

    const firstNameRef = React.useRef(null)
    const lastNameRef = React.useRef(null)
    const emailRef = React.useRef(null)
    const submitRef = React.useRef(null)

    React.useEffect(() => firstNameRef.current.focus(), [])

    const handleSubmit = () => {
        alert("Success")
    }

    const setRef = (e, reference) => {
        if (e.key === 'Enter') {
            reference.current.focus()
        }
    }

    const setSubmitRef = (e) => {
        if (e.key === 'Enter') handleSubmit()
    }

    return (
        <div className="hooks-content mt-5">
            <div>
                <h2 className="text-center text-decoration-underline">useRef</h2>
                <div className="mt-4">
                    <p>Press 'enter' to move to the next input</p>
                    <div>
                        <input 
                            className="form-control" 
                            name="firstName"
                            onChange={e => setState({...state, [e.target.name]: e.target.value})}
                            placeholder="First name"
                            ref={firstNameRef}
                            onKeyDown={e => setRef(e, lastNameRef)}
                        />
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <input 
                            className="form-control" 
                            name="lastName"
                            onChange={e => setState({...state, [e.target.name]: e.target.value})}
                            placeholder="Last name"
                            ref={lastNameRef}
                            onKeyDown={e => setRef(e, emailRef)}
                        />
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <input 
                            className="form-control" 
                            name="email"
                            onChange={e => setState({...state, [e.target.name]: e.target.value})}
                            placeholder="Email"
                            ref={emailRef}
                            onKeyDown={submitRef}
                        />
                    </div>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <button ref={submitRef} className="btn btn-outline-warning mt-3" type="button">Submit</button>
                    </div>
                </div>
                <div style={{marginTop: '50px'}}>
                        <a href="https://github.com/laskar-ksatria/react-hooks-full-course/blob/main/src/views/UseRef.js" target="_blank">See source code on github</a>
                </div>
            </div>
        </div>
    )
}

export default UseRef