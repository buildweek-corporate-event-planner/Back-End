const db = require("../../../data/dbConfig")

module.exports={
    getBy,
    findAll,
    findById,
    remove,
    add,
    editById
}

const table='users'

function getBy(email){
    return db(table)
    .where(email)
}

function findAll(){
    return db(table)
}

function findById(id){
    return db(table)
    .where({ id })
    .first()
}

function remove(id) {
    return db(table)
    .where({ id })
    .del()
}

function editById(id, update){
    return db(table)
    .where({ id })
    .update(update);
}

function add(obj, id){
    return db(table)
    .insert(obj)
    .then(findById(id))
}
