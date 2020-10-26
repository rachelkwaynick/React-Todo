// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Item from './Item';

const ToDoList = props => {
    const { list } = props;
  
    const handleClick = () => {
        props.handleClearItems()
    }

   
    return (
        // <div onClick={this.handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
        <div onClick={handleClick}>
            <h2>This is ToDoList</h2>
            {
                list.map(item => (
                    <Item
                        handleToggleItem={props.handleToggleItem}
                        key={item.id}
                        item={item}
                    />
                ))
            }
            <button
                onClick={handleClick}
            >
                Clear Done
            </button>
        </div>
    );
    
}

export default ToDoList;