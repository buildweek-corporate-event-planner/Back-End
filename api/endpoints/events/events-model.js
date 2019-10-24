const db = require('../../../data/dbConfig')
module.exports={
    findEventDetails,
    findAllByUsersId,
    findAllById,
    remove,
    add,
    editById
}
const table='events'

function findEventDetails(id, eventId) {
    findAllById(id)
    return db(table)
    .join('vendors', 'vendors.assigned_to_event', 'events.id')
    .where('vendors.assigned_to_event', eventId)
    .join('shoppingList', 'shoppingList.assigned_to_event', 'events.id')
    .where('shoppingList.assigned_to_event', eventId)
    .join('todoList', 'todoList.assigned_to_event', 'events.id')
    .where('todoList.assigned_to_event', eventId)
}

function findAllByUsersId(id){
    return db(table)
    .where('events.assigned_to_user', id)
}

function findAllById(id){
    return db(table)
    .where({id})
}

function remove(id) {
    return db(table)
    .where({id})
    .del()
}

function editById(id, update){
    return db(table)
    .where({ id })
    .update(update);
}

function add(obj){
    return db(table)
    .insert(obj)
}
