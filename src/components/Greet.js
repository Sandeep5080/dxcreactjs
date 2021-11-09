import React from 'react'

const Greet = (props) => { 
console.log(props);
return(
<div>
<h1> hello {props.name} your are from {props.college} </h1>
{props.Children}
</div>
)

}

export default Greet