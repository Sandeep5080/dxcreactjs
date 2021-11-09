import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increase() {
        /* this.setState({
            count: this.state.count + 1
        }, 
         () => { console.log('call back value', this.state.count)})
       
        console.log(this.state.count) */
        this.setState((prevState) =>({
            count: prevState.count + 1
        }) )
        console.log(this.state.count)
    }

    increaseFive(){
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
    }
    render() {
        return (
            <div>
                count - {this.state.count}
                <button onClick={() => this.increase()}>increment</button>
            </div>
        )
    }
}

export default Counter
