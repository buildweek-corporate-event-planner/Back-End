const db = require('../../../data/dbConfig')

module.exports={
    findAll,
    findAllById,
    remove,
    add,
    editById,
    addItem,
    findAllItemsByListId,
    removeListItem,
    editItemByItemId
}

const table='todoList'

function findAll(){
    return db(table)
}

function findAllById(id){
    return db(table)
    .where('todoList.id', id)
    .first()
}

function findAllItemsByListId(id){
    return db('todoListItem')
    .where('todoListItem.assigned_to_todoList', id)
}

function remove(id) {
    return db(table)
    .where({id})
    .del()
}

function removeListItem(id) {
    return db(table)
    .then(() => {
        return db('todoListItem')
        .where({id})
        .del()
    })
}

function editById(id, changes){
    return db(table)
    .where({id})
    .update(changes);
}

function editItemByItemId(id, changes){
    return db(table)
    .then(() => {
        return db('todoListItem')
        .where({id})
        .update(changes)
    })

}

function add(obj, id){
    return db(table)
    .insert(obj)
    .then(findAllById(id))
}

function addItem(obj, id){
    return db(table)
    .then(() => {
        return db('todoListItem')
        .insert(obj)
    })
    .then(findAllById(id))
}