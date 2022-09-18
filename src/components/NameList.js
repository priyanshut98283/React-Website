import React from 'react'
import Person from './Person'

export default function NameList() {
    const Persons=[
        {
            id:1,
            name:"Bruce",
            age: 25,
            skill:"React"
        },
        {
            id:2,
            name:"Clark",
            age: 20,
            skill:"Angular"
        },
        {
            id:3,
            name:"Diana",
            age: 25,
            skill:"Vue"
        }
    ]
    const names=['Bruce','Clark','Diana' ,'Bruce']
    const nameList=names.map((name,index)=><h1 key={index}>{index}{name}</h1>)
    const personList=Persons.map(person=>
        // <h1>
        // I am {person.name}. I am {person.age} years old. I know {person.skill}
        // </h1>
        <Person key={person.id} person={person}></Person>
        )
  return (
    <div>
    {/* <h3>{names[0]}</h3>
    <h3>{names[1]}</h3>
    <h3>{names[2]}</h3> */}
    {
        // names.map(name=><h1>{name}</h1>)
        personList
       
    }
    {nameList}
    </div>
  )
}
