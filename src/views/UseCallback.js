import React from 'react'

function UseCallBack() {

    const [message, setMessage] = React.useState("")
    const [email, setEmail] = React.useState("")

    //Similar like useMemo
    const getMail = React.useCallback(() => {
        console.log('Executed getMail')
        if (email) return email + '@mail.com'
    }, [email])

    return (
        <div className="hooks-content mt-5">
                            <div>
                    <h2 className="text-center text-decoration-underline">useCallback</h2>
                    
                    <div className="mt-4">
                        <div>
                            <label htmlFor="text-use-state" className="form-label">Message</label>
                            <input 
                                className="form-control" 
                                name="message"
                                value={message}
                                placeholder="Input message"
                                onChange={e => setMessage(e.target.value)}
                            />
                        </div>

                        <div className="mt-3">
                            <label htmlFor="text-use-state" className="form-label">Email</label>
                            <input 
                                className="form-control" 
                                name="Email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Input Email"
                            />
                        </div>

                        <div className="mt-5">
                            <p>
                                Message: <span style={{color:'gold', fontWeight: 'bold'}}>{message}</span>
                            </p>
                            <p>
                                Email: <span style={{color:'gold', fontWeight: 'bold'}}>{getMail()}</span>
                            </p>
                            
                        </div>
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <a href="https://github.com/laskar-ksatria/react-hooks-full-course/blob/main/src/views/UseCallback.js" target="_blank">See source code on github</a>
                    </div>
                    </div>
        </div>
    )
}

export default UseCallBack;