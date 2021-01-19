import React from 'react';
import Header from '../components/general/Header'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import UseState from './UseState'
import UseEffect from './UseEffect'
import UseContext from './UseContext'
import UseReducer from './UseReducer'
import UseReducerUseContext from './UseReducerUseContext'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'

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
                    <Route path="/useReducer" component={UseReducer} />
                    <Route path="/useReducer-useContext" component={UseReducerUseContext} />
                    <Route path="/useMemo" component={UseMemo} />
                    <Route path="/useCallback" component={UseCallback} />
                </Switch>
                
            </div>
        </>
    )
}

export default Views;