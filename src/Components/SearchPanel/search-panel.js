import React from 'react'
import './search-panel.css'

class SearchPanel extends React.Component{

    state={
        buttons:[
            {label: 'all', name:'All'},
            {label: 'active', name:'Active'},
            {label: 'done', name:'Done'}
        ],
        inpValue: ''
    }

    onInpChange=(event)=>{
        const inpValue = event.target.value
        this.setState(()=>{
            return{
                inpValue: inpValue
            }
        })
        this.props.onSearchChange(inpValue)
    }

    render(){
    
        return(
            <div className="search-panel" >
                <input 
                    className="form-control"
                    placeholder="search"
                    value={this.state.inpValue}
                    onChange={this.onInpChange}
                />
                <div className="btn-group">
                    {this.state.buttons.map((item)=>{
                       const isActive = this.props.filter === item.label
                       const clazz = isActive? "btn-info" : "btn-outline-secondary"
                        return(
                            <button
                                key={item.label}
                                type="button"
                                className={`btn ${clazz}`}
                                onClick={()=>this.props.onFilterChange(item.label)}
                            >
                            {item.name}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default SearchPanel