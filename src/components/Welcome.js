import React,{Component} from "react";

class  Welcome extends Component {
    render(){
        const {name,alias} = this.props
        const{State1,State2} = this.State
        return <h1>Welcome mr{name} your alias is {alias}</h1>
    }
}
export default Welcome