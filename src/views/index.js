import React from 'react';
import Header from '../components/general/Header'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import UseState from './UseState'
import UseEffect from './UseEffect'
import UseContext from './UseContext'

function Views() {
    return (
        <>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/useState" component={UseState} />
                    <Route path="/useEffect" component={UseEffect} />
                    <Route path="/useContext" component={UseContext} />
                </Switch>
                
            </div>
        </>
    )
}

export default Views;