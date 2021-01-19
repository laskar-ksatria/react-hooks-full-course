import React from 'react'
import { useHistory } from 'react-router-dom'

function Header() {

    let history = useHistory()

    return (
        <nav className="navbar navbar-light" style={{background: '#20232a'}}>
            <div className="container-fluid">
                <span 
                    className="navbar-brand mb-0 h1 text-light" 
                    onClick={() => history.push('/')}
                    style={{cursor: 'pointer'}}
                >
                    React Hooks
                </span>
            </div>
        </nav>
    )
}

export default Header;