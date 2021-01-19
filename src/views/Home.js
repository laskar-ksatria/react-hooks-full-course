import React from 'react'
import Card from '../components/general/Card'

const Home = () => {

    const contentList = [
        {title: 'useState', url: 'useState'}, {title: 'useEffect', url: 'useEffect'},
        {title: 'useContext', url: 'useContext'}, {title: 'useReducer', url: 'useReducer'},
        {title: 'useContext & useReducer', url: 'useReducer-useContext'}, {title: 'useMemo', url: 'useMemo'},
        {title: 'useCallback', url: 'useCallback'}, {title: 'useRef', url: 'useRef'}
    ]

    return (
        <div className="content">
            {contentList.map((item, index) => <Card title={item.title} url={item.url} key={index}/>)}
        </div>
    )
}

export default Home;