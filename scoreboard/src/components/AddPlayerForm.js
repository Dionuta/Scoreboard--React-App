import React, { Component } from 'react';


class AddPlayerForm extends Component {
       state ={
           value: ''
       }

       handelChange = event => this.setState({ value: event.target.value });
        
       
 handelSubmit = (event) => {
    event.preventDefault();
    this.props.addPlayer(this.state.value)
    this.setState({value: ''})
 }

       

     render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input
                    type="text"
                    placeholder='Enter a players name'
                    onChange ={this.handelChange}
                    value={this.state.value}
                />
                <input
                    type='submit'
                    value='Add Player'
                    
                />
            </form>
        )
    }
}


export default AddPlayerForm;