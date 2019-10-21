const db = require('../../../data/dbConfig')

module.exports={
    findAll,
    findAllByEventId,
    remove,
    add,
    editById
}

const table='vendors'

function findAll(){
    return db(table)
}

function findAllByEventId(id){
    return db(table)
    .join('events', 'events.id', 'vendors.assigned_to_event')
    .where('vendors.assigned_to_event', {id})
    .first()
}
function remove(id) {
    return db(table)
    .where({id})
    .del()
}
function editById(id,update){
    return db(table)
    .where({ id })
    .update(update);
}
function add(obj){
    return db(table)
    .insert(obj)
    .then(findById(id))
}
