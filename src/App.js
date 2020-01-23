import React, {Component} from 'react'
import axios from 'axios'
import People from './Components/People'
import CreatePerson from './Components/CreatePerson'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      people: [],
      peopleUrl: 'http://localhost:3333/api/people'
    }
    this.deletePerson = this.deletePerson.bind(this)
  }
  componentDidMount(){
    const {peopleUrl} = this.state
    axios.get(peopleUrl).then(results => {
      this.setState({people: results.data})
    }).catch(err => console.log(err))
  }

  submitPerson = (body) => {
    const {peopleUrl} = this.state
    axios.post(peopleUrl, body).then(results => {
      this.setState({people: results.data})
    }).catch(err => console.log(err))
  }

  editPerson = (body) => {
    const {peopleUrl} = this.state
    axios.put(`${peopleUrl}/${body.id}`, body).then(results => {
      this.setState({people: results.data})
    }).catch(err => console.log(err))
  }

  deletePerson(id){
    const {peopleUrl} = this.state
    console.log(`${peopleUrl}/${id}`)
    axios.delete(`${peopleUrl}/${id}`).then(results => {
      this.setState({people: results.data})
    }).catch(err => console.log(err))
  }

  render(){
    const {people} = this.state
    return(
      <div>
        <CreatePerson submitPerson={this.submitPerson} />
        <People 
          list={people} 
          deletePerson={this.deletePerson}
          editPerson={this.editPerson}
        />
      </div>
    )
  }
}