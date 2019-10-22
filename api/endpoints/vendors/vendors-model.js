const db = require('../../../data/dbConfig')

module.exports={
    findAll,
    findAllById,
    remove,
    add,
    editById,
    findAllByEventId
}

const table='vendors'

function findAll(){
    return db(table)
}

function findAllById(id){
    return db(table)
    .where({id})
    .first()
}

function findAllByEventId(id){
    return db(table)
    .where('vendors.assigned_to_event', id)
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
function add(obj, id){
    return db(table)
    .insert(obj)
    .then(findAllById(id))
}
