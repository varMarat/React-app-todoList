import React from 'react'
import './todo-list-item.css'

const TodoListItem = ({label, important, done, onDeleteItem, onActualItem,
onDoneItem    }) =>{

    const clazzName = []

    if(important){
        clazzName.push('actual')
    }
    if(done){
        clazzName.push('done')
    }

    return(
        <li className="todo-list-item list-group-item" >
            <h4 
                className={clazzName.join(' ')} 
                onClick={onDoneItem}
            >{label}</h4>
            <div>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={onDeleteItem}
                >
                   <i className="fa fa-trash-o" />
                </button>
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={onActualItem}
                >
                    <i className="fa fa-exclamation" />
                </button>
            </div>   
        </li>
    )
}

export default TodoListItem
