import React from 'react'
import Person from './Person'


export default function People(props){
  const {deletePerson, editPerson} = props
  const list = props.list.map((element, index) => {
    return <Person 
      key={index} 
      person={element} 
      deletePerson={deletePerson}
      editPerson={editPerson}/>
  })
  return(
    <div>{list}</div>
  )
}