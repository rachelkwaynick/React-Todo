import React from 'react';

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
        this.setState({input: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Input To Do Item:
                         
                        <input
                            name='item'
                            value={this.state.input}
                            onChange={this.handleChange}
                            type='text'
                        />
                    </label>

                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default ToDoForm;