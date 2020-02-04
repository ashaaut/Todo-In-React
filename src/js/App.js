import React, { Component } from 'react';
import '../Assets/Styles/App.css';
import TodoList from '../js/TodoList';
import TodoItems from '../js/TodoItems';


class App extends Component{
  inputElement=React.createRef()
  constructor(){
    super()
    this.state={
      items:[],
      currentItem:{text:"", key:""}
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem=(e)=>{
    e.preventDefault();
    const newItem=this.state.currentItem;
    if (newItem.text!=="") {
        console.log(newItem)
        const items=[...this.state.items,newItem]
        this.setState({
          items:items,
          currentItem:{text:"", key:""}
        })
    }
    console.log("add item")
  }


 deleteItem=(key)=>{
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })

  }
  render(){
    return(
      <div>
        <TodoList addItem={this.addItem} 
        items ={this.state.items}
        currentItem={this.state.currentItem}
        handleInput={this.handleInput}
        inputElement={this.inputElement}/>

        <TodoItems entries={this.state.items}
       deleteItem={this.deleteItem}
        />

      </div>
    );
  }
}

export default App;
