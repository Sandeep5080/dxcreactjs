import React from 'react'

const Greet = props => { 
    const {name,college} = props
//console.log(props);
return(
<div>
   <h1> hello {props.name} your are from {props.college} </h1>

</div>
)

}

export default Greet