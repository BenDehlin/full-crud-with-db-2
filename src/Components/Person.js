import React, {Component} from 'react'
import '../App.css'


export default class Person extends Component{
  constructor(props){
    super(props)
    this.state = {
      edit: false,
      name: '',
      age: '',
      notes: '',
      gender: ''
    }
  }

  componentDidMount(){
    const {name, age, notes, gender} = this.props.person
    this.setState({name, age, notes, gender})
  }

  handleChange = ({name, value}) => {
    this.setState({[name]: value})
    console.log(name, value)
  }

  toggle=()=>{
    this.setState({edit: !this.state.edit})
  }

  render(){
    const {edit, name, age, notes, gender} = this.state
    const {editPerson, deletePerson, person} = this.props
    const {person_id} = person
    console.log(this.state)
    return(
      <section className="person-card">
        {!edit ? <div>
          <h1>{name}</h1>
          <h1>{age}</h1>
          <h1>{gender}</h1>
          <h1>{notes}</h1>
          <button
            onClick={() => this.toggle()}
          >Edit</button>
          <button
            onClick={() => deletePerson(person_id)}
          >Delete</button>
        </div> : 
        <div>
        <input
          name='name'
          value={name}
          placeholder="Enter Name"
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name='age'
          value={age}
          placeholder="Enter Age"
          onChange={(e) => this.handleChange(e.target)}
        />
        <textarea
          name="notes"
          value={notes}
          placeholder="Enter Notes"
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name="gender"
          value={gender}
          placeholder="Enter Gender"
          onChange={(e) => this.handleChange(e.target)}
        />
          <button
            onClick={() => this.toggle()}
          >Cancel</button>
          <button
            onClick={() => {
              editPerson({person_id, name, age, notes, gender})
              this.toggle()
            }}
          >Submit</button>
        </div>}
      </section>
    )
  }
}