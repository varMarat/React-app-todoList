import React from 'react'
import './app-header.css'
const AppHeader = ({countDone, countActive}) =>{
    return(
        <div className="app-header" >
            <h1>Todo List</h1>
            <h2>{countActive} more to do, {countDone} done</h2>
        </div>
    )
}

export default AppHeader