require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

const peopleCtrl = require('./controllers/peopleController')
const peopleUrl = '/api/people'

app.use(cors())
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db running')
  app.listen(SERVER_PORT, () => console.log(`Server is on ${SERVER_PORT}`))
}).catch(err => console.log(err))

//ENDPOINTS
app.get(peopleUrl, peopleCtrl.getPeople)
app.post(peopleUrl, peopleCtrl.postPeople)
app.put(`${peopleUrl}/:id`, peopleCtrl.putPeople)
app.delete(`${peopleUrl}/:id`, peopleCtrl.deletePeople)