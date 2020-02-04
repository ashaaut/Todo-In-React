import React, { Component } from 'react';
import '../Assets/Styles/Todolist.css';

class TodoList extends Component{
    render(){
        return(
            <div className="Todolist">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input type="text" 
                            onChange={this.props.handleInput} 
                            placeholder="Task"
                            value={this.props.currentItem.text}
                            ref={this.props.inputElement} ></input>
                        <button type="submit">Add Task</button>
                    
                    </form>
                    
                </div>
                
            </div>

        )
    }
}
 export default TodoList;