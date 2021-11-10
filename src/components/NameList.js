import React from 'react'
import Person from './Person'

function NameList() {
    //const names = ['sandeep','reddy','poreddy']
    //const names = ['sandeep','reddy','poreddy','dxc']
    const persons = [
        {
            id:1,
            name: 'sandeep',
            age: 22,
            skill: 'react'
        },
        {
            id:1,
            name: 'reddy',
            age: 20,
            skill: 'flutter'
        },
        {
            id:1,
            name:'ramesh',
            age: 30,
            skill: 'java'
        },
        {
            id:1,
            name:'raju',
            age: 30,
            skill: 'spring'
        }
    ]

    //const personList = persons.map(person => <h2> i am {person.name},i am {person.age} years old and my skill is {person.skill}</h2>)
    const personList = persons.map(person => (<Person human = {person}></Person>))
    return (
        
        <div>{personList}</div>
    )

}

export default NameList
