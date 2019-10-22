const router = require('express').Router()
const dbModel = require('./shoppingList-model')

router
  .get('/',(req,res)=>{
    dbModel.findAll()
    .then(shopping => {
        res.status(200).json(shopping)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router
  .get('/:id',(req,res)=>{
    const {id}=req.params

    dbModel.findAllById(id)
    .then(shopping => {
        res.status(200).json(shopping)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router
  .get('/events/:id',(req,res)=>{
    const {id}=req.params

    dbModel.findAllByEventId(id)
    .then(shopping => {
        res.status(200).json(shopping)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router
  .get('/listItems/:id', (req,res)=>{
    const {id}=req.params

    dbModel.findAllItemsByListId(id)
    .then(shopping => {
        res.status(200).json(shopping)
    })
    .catch(err => {
        res.status(500).json(err)
    })
  })
  
router
  .post('/',(req,res)=>{
    const {body}=req
    const {id}=req.params

    dbModel.add(body)
    .then(shopping => {
        res.status(200).json(body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router
  .post('/listItem', (req,res)=>{
    const {body}=req
    const {id}=req.params

    dbModel.addItem(body)
    .then(shopping => {
        res.status(200).json(body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
  })

router
  .put('/:id',(req,res)=>{
    const {id}=req.params
    const {body}=req
  
    dbModel.editById(id, body)
    .then(shopping => {
        res.status(200).json(body)
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).json(err.message)
    })
})

router
  .put('/listItem/:id',(req,res)=>{
    const {id}=req.params
    const {body}=req
  
    dbModel.editItemByItemId(id, body)
    .then(shopping => {
        res.status(200).json(body)
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).json(err.message)
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

router
  .delete('/listItem/:id',(req,res)=>{
    const {id}=req.params

    dbModel.removeListItem(id)
    .then(() => res.sendStatus(204))
    .catch(err => {
        res.status(500).json(err)
    })
})
module.exports=router
