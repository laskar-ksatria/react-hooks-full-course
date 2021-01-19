import React from 'react'

function UseMemo() {

    const [message1, setMessage1] = React.useState("")
    const [message2, setMessage2] = React.useState("")
    const [filterMessage, setFilterMessage] = React.useState("")

    const filteredMessage = React.useMemo(() => {
        console.log('Filter message executed')
        setFilterMessage(message2.toUpperCase())
    }, [message2])

    return (
        <div className="hooks-content mt-5">
            <div>
                <h2 className="text-center text-decoration-underline">useMemo</h2>
                <div className="mt-4">
                        <div>
                            <label htmlFor="text-use-state" className="form-label">Message1</label>
                            <input 
                                className="form-control" 
                                value={message1}
                                //Put the handleChange here
                                onChange={e => setMessage1(e.target.value)}
                                placeholder="Input message1"
                            />
                        </div>
                        <div>
                            <label htmlFor="text-use-state" className="form-label mt-2">Message2</label>
                            <textarea 
                                className="form-control" 
                                value={message2}
                                onChange={e => setMessage2(e.target.value)}
                                placeholder="Input message2"
                            />
                        </div>
                        <div className="mt-5">
                            <p>
                                Message1: <span style={{color:'gold', fontWeight: 'bold'}}>{message1}</span>
                            </p>
                            <p>
                                Message2: <span style={{color: 'gold', fontWeight: 'bold'}}>{message2}</span>
                            </p>
                            <p>
                                Message2 Uppercase: <span style={{color: 'gold', fontWeight: 'bold'}}>{filterMessage} <span style={{marginLeft: '20px', fontSize: '9px', color: 'white', fontWeight: '400'}}>*Only executed when message2 is changed</span></span>
                            </p>
                        </div>
                    </div>
                    <div style={{marginTop: '50px'}}>
                        <a href="https://github.com/laskar-ksatria/react-hooks-full-course/blob/main/src/views/UseMemo.js" target="_blank">See source code on github</a>
                    </div>
            </div>
        </div>
    )
}

export default UseMemo