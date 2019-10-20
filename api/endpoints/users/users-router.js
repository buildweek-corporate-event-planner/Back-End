const router = require('express').Router()

const dbModel = require("./users-model")

router
  .get('/', (req,res) => {
    dbModel.findAll()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router
  .get('/:id',(req,res) => {
    const {id}=req.params
    
    dbModel.findAllById(id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router
  .put('/:id',(req,res)=>{
    const {id}=req.params
    const {body}=req
  
    dbModel.editById(id)
    .then(user => {
        res.status(200).json(body)
    })
    .catch(err => {
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
