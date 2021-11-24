import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'rajesh'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(){
        
            alert('hello '+this.state.parentName)
            
        }
    
        
        
    
    render() {
        return (
            <div>
                <ChildComponent rameshHandler = {this.greetParent}/>  
            </div>
        )
    }
}

export default ParentComponent
