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
    editItemByItemId,
    findAllByEventId
}

const table='shoppingList'

function findAll(){
    return db(table)
}

function findAllById(id){
    return db(table)
    .where('shoppingList.id', id)
    .first()
}

function findAllByEventId(id){
    return db(table)
    .where('shoppingList.assigned_to_event', id)
}

function findAllItemsByListId(id){
    return db('shoppingListItem')
    .where('shoppingListItem.assigned_to_shoppingList', id)
}

function remove(id) {
    return db(table)
    .where({id})
    .del()
}

function removeListItem(id) {
    return db(table)
    .then(() => {
        return db('shoppingListItem')
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
        return db('shoppingListItem')
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
        return db('shoppingListItem')
        .insert(obj)
    })
    .then(findAllById(id))
}
