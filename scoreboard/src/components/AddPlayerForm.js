import React, { Component } from 'react';


class AddPlayerForm extends Component {

    playerInput = React.createRef();

    handelSubmit = (event) => {
        event.preventDefault();
        this.props.addPlayer(this.playerInput.current.value)
        event.currentTarget.reset();
    }



    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input
                    type="text"
                    ref={this.playerInput}
                    placeholder='Enter a players name'
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