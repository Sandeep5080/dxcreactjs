import React, { Component } from 'react'

export class CallbackRefTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.inputRef = (el) => {
            this.textInput = el;
        };
    }

    
    render() {
        return (
            
                 <div className='my-3'>
                <h2>Callback Ref Input</h2>
                <input
                    type='text'
                    className='border border-gray-500'
                    ref={this.props.inputRef}
                />
            </div>
        )
    }
}

export default CallbackRefTextInput
