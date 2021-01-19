import React, {useState, useEffect} from 'react'

function UseEffect() {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [users, setUsers] = useState(null)
    

    useEffect(() => {
        setCount2(count1 * 2)
    }, [count1])
    //The effect will be executed when the count1 is change

    const handleChange = e => setCount1(e.target.value)

    //Fetching data with useEffect, is similar like componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, [])
    

    return (
        <div className="hooks-content mt-5">
            <div>
                <h2 className="text-center">UseEffect</h2>
                <a href="https://github.com/laskar-ksatria/react-hooks-full-course/blob/main/src/views/UseEffect.js">See source code on github</a>
                <div className="mt-4">
                    <div>
                        <label htmlFor="text-use-state" className="form-label">Count1</label>
                        <input 
                            type="number"
                            className="form-control"
                            placeholder="Input number" 
                            value={count1}
                            //Put the handleChange here
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-4">
                        <p className="fw-bold">Count2: <span style={{color: 'gold'}}>{count2}</span></p>
                        <p style={{fontSize: '12px'}}>*count2 is twice that of count1</p>
                    </div>
                </div>
                <div className="mt-2">
                    {users ? <h4>The data below fetching with useEffect</h4> : ""}
                    <ul>
                        {users ? users.map((item, index) => {
                            return <li key={index}>{item.name}</li>
                        }) : ""}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UseEffect