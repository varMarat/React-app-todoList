import React from 'react'
import './App.css'
import AppHeader from './AppHeader/app-header'
import SearchPanel from './SearchPanel/search-panel'
import TodoList from './TodoList/todo-list'
import AddItem from './AddItem/add-item'


class App extends React.Component{

    state={
        todoData:[
            {label:'Drink coffee', done: false, important: false, id:1},
            {label:'Make awesome app', done: false, important: false, id:2},
            {label:'Have a lanch', done: false, important: false, id:3}
        ],
        searchInpVal:'',
        filter: 'all' 
    }
    onActualItem=(id)=>{
        this.setState(()=>{
        const newTodoData = [...this.state.todoData]
        const ind = newTodoData.findIndex(el=> el.id === id)
        const imp = newTodoData[ind].important
        newTodoData[ind].important=!imp
            return{
                todoData: newTodoData
            }
        })
    }
    onDeleteItem=(id)=>{
       this.setState(()=>{
        const newTodoData = [...this.state.todoData]
        const ind = newTodoData.findIndex(el=> el.id === id)
        newTodoData.splice(ind, 1)
           return{
               todoData: newTodoData
           }
       })
    }
    onDoneItem=(id)=>{
        this.setState(()=>{
          const newTodoData = [...this.state.todoData]
          const ind = newTodoData.findIndex(el=> el.id === id)
          const done = newTodoData[ind].done
          newTodoData[ind].done=!done
            return{
                todoData: newTodoData
            }
        })
    }
    onSearchChange=(searchInpVal)=>{
        this.setState({
            searchInpVal
        })
    }
    onSearch(todoData, searchInpVal){
        if(searchInpVal===''){
            return todoData
        }
        // debugger
        return todoData.filter((el)=>{
            return el.label.toLowerCase().indexOf(searchInpVal.toLowerCase()) >-1
        })
    }
    onFilter(todoData, filter){
        switch(filter){
            case 'all':
                return todoData;
            case 'done':
                return todoData.filter(el => el.done === true);
            case 'active': 
                return todoData.filter(el => el.done === false);
            default:
                return todoData          
        }
    }
    onFilterChange = (filter) =>{
        this.setState({
            filter
        })
    }
    addItem = (text) => {
     const newTodoData = [...this.state.todoData]
     const id = newTodoData.length+1
     newTodoData.push({label:text, done:false, important:false, id: id})
     this.setState(()=>{
         return{
             todoData:newTodoData
         }
     })
    } 

    render(){
        const {todoData,  searchInpVal, filter} = this.state
        let todo = this.onFilter(this.onSearch(todoData, searchInpVal), filter)
        const countDone = todoData.filter(el=>el.done).length
        const countActive = todoData.length - countDone
        
        return(
            <div className="App"> 
                <div>
                    <AppHeader
                        countDone={countDone}
                        countActive={countActive}
                    />
                    <SearchPanel
                        onSearchChange={this.onSearchChange}
                        onFilterChange={this.onFilterChange}
                        filter={this.state.filter}
                    />
                    <TodoList
                        todos={todo}
                        onDeleteItem={this.onDeleteItem}
                        onActualItem={this.onActualItem}
                        onDoneItem={this.onDoneItem}
                    />
                    <AddItem 
                         addItem={this.addItem}
                    />
                </div>
            </div>   
        )
    }
}

export default App