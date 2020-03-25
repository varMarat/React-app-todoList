import React from 'react'
import './todo-list.css'
import TodoListItem from './TodoListItem/todo-list-item'

const TodoList = ({todos, onDeleteItem, onActualItem, onDoneItem}) =>{
    return(
        <ul className="list-group todo-list">
            {
                todos.map((item)=>{
                    return(
                        <TodoListItem
                            key={item.id}
                            label={item.label}
                            important={item.important}
                            done={item.done}
                            onDoneItem={()=>onDoneItem(item.id)}
                            onDeleteItem={()=>onDeleteItem(item.id)}
                            onActualItem={()=>onActualItem(item.id)}
                        />
                    )
                })
            }
        </ul>
    )
}

export default TodoList