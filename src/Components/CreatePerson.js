import React, {Component} from 'react'

export default class CreatePerson extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      notes: '',
      gender: ''
    }
  }

  handleChange=({name, value})=>{
    this.setState({[name]: value})
  }

  render(){
    const {name, age, notes, gender} = this.state
    const {submitPerson} = this.props
    return(
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
          onClick={() => {
            submitPerson({name, age, notes, gender})
            this.setState({name: '', age: '', notes: '', gender: ''})
          }}
        >Submit</button>
      </div>
    )
  }
}