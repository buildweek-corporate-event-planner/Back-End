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

## .get /api/shopping/events/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/shopping/events/1

returns a shopping list title of a specified event id

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

## .get /api/todo/events/:id
how the endpoint should look:
>https://bw-corporate-event-planner.herokuapp.com/api/todo/events/1

returns a todo list title of a specified event id

example data set:
>[{
  "id": 2,
  "list_name": "hello",
  "assigned_to_event": 1
}]

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

# Proposal

## What problem does your app solve?
App to keep track of all your corporate event planning details! There are so many details and people to coordinate with. This app helps solve these problems.


## Be as specific as possible; how does your app solve the problem?
Organize details that may get lost when planning an event.


## What is the mission statement?
Our mission is to deliver a simple and effective app to help plan large scale corporate events.

# Features

## What features are required for your minimum viable product?
This app contains one user type- a corporate event planner.
Onboarding process for event planner. Include their company, role and e-mail.
Home Page - After a user logs in, they'll be directed to their page where they can view cards of their past and current events they are planning. They can click into an event to view full screen or edit or delete info.
Navigation - Navigation is present on all pages.
Create Post Page - Allow a user to create a new event to plan.  New event fields might include event name, description, date and time, and budget. You can add a list of vendors you need to maintain relationships with, and create a shopping or to do list with the ability to mark off items as done. When saved you can view a preview of the event on the homepage.
Single event page. View a single event in full screen. Include functional buttons to edit and delete data.  View the to-do list/shopping list, and list of vendors.


## What features may you wish to put in a future release?
Floor plan schematics, Invite other co-workers by e-mail to join the project, with ability to edit it as well. On the single event page, add ability to add comments to each vendor on the list to track conversations and notes.


## What do the top 3 similar apps do for their users?
keep ideas, multiple todo lists, spreadsheets
Design - Planning

# Optional but highly recommended Please refer to this document:
#Build Weeks: Planning & Design Worksheet (How to build a beautiful application)

## What design system will you use?
Material design


## What will your user flow be?
Register, if new user, login, homepage(mapped over data, list of cards, edit and delete on cards), add event. 


## What is the URL to your wireframes?



# Frameworks - Libraries

## What 3rd party frameworks/libraries are you considering using?
Bcrypt, Formik, Redux, ContextAPI, Less


## Do APIs require you to contact its maintainer to gain access?
no


## Are you required to pay to use the API?
no


## Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
no

# For Data Scientists

## Describe the Established data source with at least rough data able to be provided on day 1.


## You can gather information about the data set you’ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.


## Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?)


## A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app


# Target Audience

## Who is your target audience? Be specific.
Corporate event planners


## What feedback have you gotten from potential users?
Make it simple.


## Have you validated the problem and your solution with your target audience? How?
no


# Research

## Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
Prototype Key Feature(s)

## This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.
It should take us about 4 days to deliver a finished application.
