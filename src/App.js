import React from 'react';
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

const list = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
       list 
    }
  }

  handleToggleItem = (itemId) => {

    this.setState({
      list: this.state.list.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            done: !item.done
          }
        }
        else {
          return item;
        }
      })
    })
  }
  
  handleAddItem = (name) => {
    console.log('handleAddItem')
    this.setState({
      list: [
        ...this.state.list, {
          name: name,
          id: this.state.list.length,
          done: false
        }
      ]
    })
  }

  clearItems = () => {
    this.setState({
      list: this.state.list.filter(item => (!item.done))
    });
  }

  render() {
    return (
      <div>
        <ToDoForm
          handleAddItem={this.handleAddItem}
        />

        <ToDoList
          handleClearItems={this.clearItems}
          handleToggleItem={this.handleToggleItem}
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
