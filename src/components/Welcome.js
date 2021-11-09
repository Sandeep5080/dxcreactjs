import React,{Component} from "react";

class  Welcome extends Component {
    render(){
        return <h1>Welcome mr {props.name}user{props.college}</h1>
    }
}
export default Welcome