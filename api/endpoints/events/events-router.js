const router = require('express').Router()
const dbModel = require('./events-model')

router
  .get('/event-details/:id/:eventId', (req,res) => {
      const {id, eventId}=req.params

      dbModel.findEventDetails(id, eventId)
      .then(event => {
          res.status(200).json(event)
      })
      .catch(err => {
          res.status(500).json(err)
      })
  })

router
  .get('/user/:id',(req,res)=>{
    const {id}=req.params

    dbModel.findAllByUsersId(id)
    .then(event => {
        res.status(200).json(event)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message:"this is an error:", err})
    })
})

router
  .get('/:id',(req,res)=>{
    const {id}=req.params

    dbModel.findAllById(id)
    .then(event => {
        res.status(200).json(event)
    })
    .catch(err => {
        res.status(500).json({message:"hello, error here ->", err})
    })
})
  
router
  .post('/',(req,res)=>{
    const {body}=req

    dbModel.add(body)
    .then(event => {
        res.status(201).json(event)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router
  .put('/:id',(req,res)=>{
    const {id}=req.params
    const {body}=req
  
    dbModel.editById(id, body)
    .then(user => {
        res.status(200).json(body)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router
  .delete('/:id',(req,res)=>{
    const {id}=req.params
    
    dbModel.remove(id)
    .then(() => res.sendStatus(204))
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports=router
