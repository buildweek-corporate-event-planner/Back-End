const router = require('express').Router()
const dbModel = require('./events-model')

router
  .get('/user/:id',(req,res)=>{
    const {id}=req.params
    dbModel.findAllByUsersId(id)
    .then(event => {
        res.status(200).json(event)
    })
    .catch(err => {
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
  
// router
//   .post('/',(req,res)=>{
//     const {body}=req
//     return dbModel.add(body)
//     .then(p=>{res.status(201).json({message:`SUCCESS`,...p})})
//     .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
// })

// router
//   .put('/:id',(req,res)=>{
//     const {id}=req.params
//     const {body}=req
  
//     return dbModel.editById(id)
//     .then(p=>{res.status(200).json({message:`SUCCESS`,...p})})
//     .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
// })

// router
//   .delete('/:id',(req,res)=>{
//     const {id}=req.params
    
//     return dbModel.remove(id)
//     .then(p=>{res.status(201).json({message:`SUCCESS`,...p})})
//     .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
// })

module.exports=router
