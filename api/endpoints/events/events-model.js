const db = require('../../../data/dbConfig')
module.exports={
    findAllByUsersId,
    findAllById,
    // remove,
    // add,
    // editById
}
const table='events'

function findAllByUsersId(id){
    return db(table)
    .join('users', 'users.id','events.assigned_to_user', 'shoppingList.assigned_to_event')
    .where('events.id', {id})
    .select('events.*', 'shoppingList.*')
}

function findAllById(id){
    return db(table)
    .join('shoppingList', 'shoppingList.assigned_to_event', 'events.id')
    .where('shoppingList.assigned_to_event', {id})
    .select('events.*', 'shoppingList.*')
}

// function remove(id) {
//     return db(table)
//     .where({id})
//     .del()
// }
// function editById(id,update){
//     return db(table)
//     .where({ id })
//     .update(update, '*');
// }
// function add(obj){
//     return db(table)
//     .insert(obj)
//     .then(findById(id))
// }
