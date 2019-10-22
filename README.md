# Back-End

#### https://bw-corporate-event-planner.herokuapp.com

# /api/auth

## .post /api/auth/register
How the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/auth/register

all of fields are required! 

what is needed to register:
>{
	"email":  "", 
	"password": "", 
	"role": "",
	"company": ""
}

## .post /api/auth/login
How the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/auth/login

email and password have to be registered to log in!

what is needed to login:
>{
	"email": "", 
	"password": ""
}

# /api/users

## .get /api/users/
How the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/users/

returns all users

example data set: 
>{
    "id": 1,
    "email": "pam@dundermifflinpaperco.com",
    "password": "pam123",
    "role": "receptionist",
    "company": "Dunder Mifflin Paper Co"
  }, {
    "id": 2,
    "email": "jim@dundermifflinpaperco.com",
    "password": "$2a$10$ZYAT5t1Q5/UxeYhp3BxCoeVlDdhlJ5vtEmne3hkO9HYgCJv7KCLka",
    "role": "sales",
    "company": "Dunder Mifflin Paper Co"
  }

## .get /api/users/:id
how the endpoint should look:
> https://bw-corporate-event-planner.herokuapp.com/api/users/1

returns user of a specified id

example data set: 
>{
    "id": 1,
    "email": "pam@dundermifflinpaperco.com",
    "password": "pam123",
    "role": "receptionist",
    "company": "Dunder Mifflin Paper Co"
  }

## .put /api/users/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/users/1

updates a valid user's information, all of these are non-nullable!

what is needed to update user's info:
> {
	"email": "", 
	"password": "", 
	"role": "",
	"company": ""
}

## .delete /api/users/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/users/1

deletes user of a specified id


# /api/events

## .get /api/events/event-details/:id/:eventId
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/events/event-details/1/1

returns all details about specified event by specified user

example data set: 
>[
  {
    "id": 1,
    "event_name": "Halloween Party",
    "description": "Office Halloween Party",
    "budget": 250,
    "event_date": "2019-10-31",
    "event_time": "06:00",
    "assigned_to_user": 1,
    "vendor_name": "Alfredo's Pizza Cafe",
    "assigned_to_event": 1,
    "list_name": "Do It"
  }
]

## .get /api/events/user/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/events/user/1

returns all events by specified user

example data set:
>[
  {
    "id": 1,
    "event_name": "Halloween Party",
    "description": "Office Halloween Party",
    "budget": 250,
    "event_date": "2019-10-31",
    "event_time": "06:00",
    "assigned_to_user": 1
  }
]

## .get /api/events/:id

how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/events/1

returns specified event by id

example data set:
>{
  "id": 1,
  "event_name": "Halloween Party",
  "description": "Office Halloween Party",
  "budget": 250,
  "event_date": "2019-10-31",
  "event_time": "06:00",
  "assigned_to_user": 1
}

## .post /api/events/
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/events/

adds an event, all fields are required.

what is needed to post a new event:
>{
	"event_name": "",
    "description": "",
    "budget": integer,
    "event_date": "YYYY-MM-DD",
    "event_time": "HH:MM",
	"assigned_to_user": integer
}



## .put /api/events/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/events/1

updates valid event of a specified id, all fields are required.

what is needed to update an event:
>{
    "event_name": "",
    "description": "",
    "budget": integer,
    "event_date": "YYYY-MM-DD",
    "event_time": "HH:MM",
    "assigned_to_user": integer
}

## .delete /api/events/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/events/1

deletes event of a specified id

# /api/vendors

## .get /api/vendors/
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/vendors/

returns a list of all vendors

example data set:
>[
  {
    "id": 1,
    "vendor_name": "Alfredo's Pizza Cafe",
    "assigned_to_event": 1
  }
]

## .get /api/vendors/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/vendors/1

returns a vendor of a specified id

example data set:
>{
  "id": 1,
  "vendor_name": "Alfredo's Pizza Cafe",
  "assigned_to_event": 1
}

## .get /api/vendors/events/1
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/vendors/events/1

returns all vendors for a specified event id

example data set:
>[
  {
    "id": 1,
    "vendor_name": "Alfredo's Pizza Cafe",
    "assigned_to_event": 1
  }
]

## .post /api/vendors/
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/vendors/

adds a new vendor

what is needed to add a new vendor:
>{
	"vendor_name": "",
	"assigned_to_event": integer
}

## .put /api/vendors/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/vendors/1

updates vendor of a specified id

what is needed to update a vendor:
>{
	"vendor_name": "",
	"assigned_to_event": integer
}

## .delete /api/vendors/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/vendors/1

deletes vendor of a specified id

# /api/shopping

## .get /api/shopping/
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/shopping/

returns a list of all the Shopping List Titles

example data set:
>[
  {
    "id": 1,
    "list_name": "Decorations",
    "assigned_to_event": 1
  },
  {
    "id": 2,
    "list_name": "hello",
    "assigned_to_event": 1
  }
]

## .get /api/shopping/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/shopping/1

returns a shopping list title of a specified id

example data set:
>{
  "id": 2,
  "list_name": "hello",
  "assigned_to_event": 1
}

## .get /api/shopping/listItems/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/shopping/listItems/1

returns all shopping list items of a specified List id

example data set:
>[
  {
    "id": 2,
    "list_item": "Hello2",
    "purchased": 1,
    "assigned_to_shoppingList": 2
  }
]

## .post /api/shopping/
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/shopping/

adds a new shopping list title 

what is needed to post a new shopping list:
>{
	"list_name": "",
	"assigned_to_event": integer
}

## .post /api/shopping/listItem
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/shopping/listItems

adds a new shopping list item

what is needed to add a new shopping list item:
>{
	"list_item": "",
	"purchased": false,
	"assigned_to_shoppingList": integer
}

## .put /api/shopping/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/shopping/1

edits a shopping list title of a specified id

what is needed to edit a shopping list:
>{
	"list_name": "",
	"assigned_to_event": integer
}

## .put /api/shopping/listItem/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/shopping/listItems/1

edits a shopping list item of a specified id

what is needed to edit a shopping list item:
>{
	"list_item": "",
	"purchased": false,
	"assigned_to_shoppingList": integer
}

## .delete /api/shopping/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/shopping/1

deletes a shopping list title of a specified id

## .delete /api/shopping/listItem/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/shopping/listItems/1

deletes a shopping list item of a specified id

# /api/todo

## .get /api/todo/
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/todo/

returns a list of all the Todo List Titles

example data set:
>[
  {
    "id": 1,
    "list_name": "Do It",
    "assigned_to_event": 1
  }
]

## .get /api/todo/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/todo/1

returns a todo list title of a specified id

example data set:
>{
  "id": 2,
  "list_name": "Hello2",
  "assigned_to_event": 1
}

## .get /api/todo/listItems/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/todo/listItems/1

returns all todo list items of a specified List id

example data set:
>[
  {
    "id": 2,
    "list_item": "Hello2.1",
    "completed": 1,
    "assigned_to_todoList": 2
  }
]

## .post /api/todo/
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/todo/

adds a new todo list title 

what is needed to add a new todo list:
>{
	"list_name": "",
	"assigned_to_event": integer
}

## .post /api/todo/listItem
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/todo/listItem

adds a new todo list item

what is needed to add a new todo list item:
>{
	"list_item": "",
	"completed": false,
	"assigned_to_todoList": integer
}

## .put /api/todo/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/todo/1

edits a todo list title of a specified id

what is needed to update a todo list title:
>{
	"list_name": "",
	"assigned_to_event": integer
}

## .put /api/todo/listItem/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/todo/listItem/1

edits a todo list item of a specified id

what is needed to update a todo list item:
>{
	"list_item": "",
	"completed": false,
	"assigned_to_todoList": integer
}

#### .delete /api/todo/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/todo/1

deletes a todo list title of a specified id

#### .delete /api/todo/listItem/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/todo/listItem/1

deletes a todo list item of a specified id
