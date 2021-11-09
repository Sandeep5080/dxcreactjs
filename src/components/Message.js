import React,{Component} from "react";

class  Message extends Component {
     constructor(){
         super()
         this.state = {
             message: 'Welcome visitor to dxc'
         }
     }

    render(){
        return (
            <div>

         <h1>{this.state.message}</h1>
         <button onClick = {()=> this.changeMessage()}>subscribe</button>
         </div>
        )
    }
    changeMessage(){
        this.setState({
            message: 'thank you for subscribing'
        }

        )
    }
}
export default Message