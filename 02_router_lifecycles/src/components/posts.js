import React from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {

    const ids = [
        {id:'1', name:'Post 1'},
        {id:'2', name:'Post 2'},
        {id:'3', name:'Post 3'}
    ]

    // REACT 15
/*     const list = ids.map((item) => {
        return (
            <span key={item.id}>
                <Link to={item.id}>{item.name}</Link><br/>
            </span>
        )
    })

    return (
        <div>
            {list}
        </div>
    ) */

    // REACT 15 V2

    return ids.map((item) => {
        return (
            <span key={item.id}>
                <Link to={item.id}>{item.name}</Link><br/>
            </span>
        )
    })
}

export default Posts;