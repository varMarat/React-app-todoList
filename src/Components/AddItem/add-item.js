import React from 'react'
import './add-item.css'

class AddItem extends React.Component{

    state={
        text: ''
    }

    controllInput=(event)=>{
        const text = event.target.value
        this.setState({
            text
        })
    }
    onSubmit=(event)=>{
        event.preventDefault()
        this.props.addItem(this.state.text)
        this.setState({text:''})
    }

    render(){
        return(
            <form className="add-item" onSubmit={this.onSubmit}>
                <input 
                    className="form-control" 
                    onChange={this.controllInput}
                    value={this.state.text}
                />
                <button
                    className="btn btn-outline-dark"
                    type="submit"
                >Add</button>
            </form>
        )
    }
}

export default AddItem