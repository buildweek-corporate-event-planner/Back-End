# Back-End

## Endpoints

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
