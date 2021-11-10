import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn : true
            
            
        }
    }
    render() {
        
        let message 
        if(this.state.isLoggedIn){
            message = <div>welcome Sandeep</div>
        }
        else{
            message = <div>welcome guest</div>
        }
        return <div>{message}</div>
    
        /*if(this.state.isLoggedIn){
            return <div>welcome sandeep</div>
        }
        else{
            return <div>welcome reddy</div>
        }
    }*/
}
}

export default UserGreeting
