import React,{Component} from "react";

class  Welcome extends Component {
    render(){
        return <h1>Welcome mr{this.props.name} user{this.props.college}</h1>
    }
}
export default Welcome