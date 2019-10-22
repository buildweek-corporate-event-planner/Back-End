# Back-End

## Endpoints
### https://bw-corporate-event-planner.herokuapp.com

### /api/auth

#### .post /api/auth/register
all of these are non-nullable! 
>{
	"email":  "", 
	"password": "", 
	"role": "",
	"company": ""
}

#### .post /api/auth/login
have to be registered!
>{
	"email": "", 
	"password": ""
}

### /api/users

#### .get /api/users/
returns all users

#### .get /api/users/:id
returns user of a specified id

#### .put /api/users/:id
updates a valid user's information, all of these are non-nullable!
> {
	"email": "", 
	"password": "", 
	"role": "",
	"company": ""
}

#### .delete /api/users/:id
deletes user of a specified id

### /api/events

#### .get /api/events/event-details/:id/:eventId
returns all details about specified event by specified user

#### .get /api/events/user/:id
returns all events by specified user

#### .get /api/events/:id
returns specified event by id

#### .post /api/events/
adds an event, all of these are non-nullable
>{
	"event_name": "",
    "description": "",
    "budget": integer,
    "event_date": "YYYY-MM-DD",
    "event_time": "HH:MM",
	"assigned_to_user": integer
}

#### .put /api/events/:id
updates valid event of a specified id, all of these are non-nullable
>{
    "event_name": "",
    "description": "",
    "budget": integer,
    "event_date": "YYYY-MM-DD",
    "event_time": "HH:MM",
    "assigned_to_user": integer
}

#### .delete /api/events/:id
deletes event of a specified id

### /api/vendors

#### .get /api/vendors/
returns a list of all vendors

#### .get /api/vendors/:id
returns a vendor of a specified id

#### .post /api/vendors/
adds a new vendor
>{
	"vendor_name": "",
	"assigned_to_event": integer
}

#### .put /api/vendors/:id
updates vendor of a specified id
>{
	"vendor_name": "",
	"assigned_to_event": integer
}

#### .delete /api/vendors/:id
deletes vendor of a specified id

### /api/shopping

#### .get /api/shopping/
returns a list of all the Shopping List Titles

#### .get /api/shopping/:id
returns a shopping list title of a specified id

#### .get /api/shopping/listItems/:id
returns all shopping list items of a specified List id

#### .post /api/shopping/
adds a new shopping list title 
>{
	"list_name": "",
	"assigned_to_event": integer
}

#### .post /api/shopping/listItem
adds a new shopping list item
>{
	"list_item": "",
	"purchased": false,
	"assigned_to_shoppingList": integer
}

#### .put /api/shopping/:id
edits a shopping list title of a specified id
>{
	"list_name": "",
	"assigned_to_event": integer
}

#### .put /api/shopping/listItem/:id
edits a shopping list item of a specified id
>{
	"list_item": "",
	"purchased": false,
	"assigned_to_shoppingList": integer
}

#### .delete /api/shopping/:id
deletes a shopping list title of a specified id

#### .delete /api/shopping/listItem/:id
deletes a shopping list item of a specified id

### /api/todo

#### .get /api/todo/
returns a list of all the Todo List Titles

#### .get /api/todo/:id
returns a todo list title of a specified id

#### .get /api/todo/listItems/:id
returns all todo list items of a specified List id

#### .post /api/todo/
adds a new todo list title 
>{
	"list_name": "",
	"assigned_to_event": integer
}

#### .post /api/todo/listItem
adds a new todo list item
>{
	"list_item": "",
	"completed": false,
	"assigned_to_todoList": integer
}

#### .put /api/todo/:id
edits a todo list title of a specified id
>{
	"list_name": "",
	"assigned_to_event": integer
}

#### .put /api/todo/listItem/:id
edits a todo list item of a specified id
>{
	"list_item": "",
	"completed": false,
	"assigned_to_todoList": integer
}

#### .delete /api/todo/:id
deletes a todo list title of a specified id

#### .delete /api/todo/listItem/:id
deletes a todo list item of a specified id
