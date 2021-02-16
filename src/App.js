import React, { Component } from 'react';
import './App.css';
import ListItem from './component/ListItem';
import { library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items :[] ,
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  }

  handleInput(e){
    this.setState({  //do update when I type any text in input
      currentItem:{
        text:e.target.value, //input text
        key:Date.now()
      }
    })}

    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if (newItem !== ""){
      const newItems=[...this.state.items, newItem];
      this.setState({
      items:newItems,
      currentItem:{
      text:'',
      key:''
      }
      }) }}


      
      deleteItem(key){
        const filterI =this.state.items.filter(item=>
          item.key !== key);
          this.setState({
            items:filterI
          })
        
      }


  render(){
    return(
            <div className="App">
              <p id="todo-title">Todo List</p>
              <form id="to-do-form" onSubmit={this.addItem}> 
                <input type="text" placeholder="TO DO .." value={this.state.currentItem.text} 
                onChange={this.handleInput} />       
                <button disabled={!this.state.currentItem.text}>Add</button>
              </form>
              <ListItem items={this.state.items}
              deleteItem={this.deleteItem}/>
            </div>
    )
  }
}

export default App;
