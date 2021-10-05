# Bills Tracker

This application allows for the creating of bills that are in a single household/group. The members can create bills that need to be paid or are already paid (for record keeping). Each bill can have a bill paying member attatched to an individual bill. It is a simple way of organizing who owes what and when. 

Bills Tracker is a MVP SPA React/Redux Frontend application with a Rails API backend that allows for client-server communication.

### React

- Utilizes state/stateless components.
- Handles the display of data with minimal data manipulation.
- Uses Redux middleware to respond to and modify state change.
- Makes use of async actions and redux-thunk middleware to send data to and receive data from a server.


### Rails

- RESTful conventions and Rails Models/Controllers.
- Serializers, SQL, and ActiveRecord.
- Rails API handles the data persistence with a database. Uses fetch() within actions to GET and POST data from API.
- All four of the CRUD functionality. 
- Object Relational Mapping between models with has_many and belongs_to.

## Installation

### React Frontend

- Clone this repo.
- npm install
- npm start
- Browser should automatically start up, if not go to http://localhost:3000/

### Rails Backend

- Head to https://github.com/sbigelo/bills-tracker-backend
- Follow instructions there.

## License

