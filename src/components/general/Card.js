import React from 'react'
import { Link } from 'react-router-dom'

function Card({title, url}) {
    return (
        <div className="card-link">
            <Link to={`/${url}`} style={{textDecoration: 'none'}}>
                <div className="card-link-body">
                    <div className="card-link-content">
                        <div className="fw-bold fs-6">{title}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;