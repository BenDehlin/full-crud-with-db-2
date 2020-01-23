module.exports = {
  getPeople: (req, res) =>{
    const db = req.app.get('db')
    db.get_people().then(people => {
      res.status(200).send(people)
    }).catch(err => res.status(500).send(err))
  },
  postPeople: (req, res) =>{
    const db = req.app.get('db')
    const {name, age, notes, gender} = req.body
    db.post_people(name, age, notes, gender).then(people => {
      res.status(200).send(people)
    }).catch(err => res.status(500).send(err))
  },
  putPeople: (req, res) =>{
    const db = req.app.get('db')
    const {id} = req.params
    const {name, age, notes, gender} = req.body
    db.put_people(id, name, age, notes, gender).then(people => {
      res.status(200).send(people)
    }).catch(err => res.status(500).send(err))
  },
  deletePeople: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_people(id).then(people => {
      res.status(200).send(people)
    }).catch(err => res.status(500).send(err))
  }
}