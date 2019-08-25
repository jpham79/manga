## Manga Bois Backend Node Server

```
backend         ~ Top Level Directory
- config        ~ Configurations that are used when launching the server
    `config         ~ Setup environment variables to configure the server
    `express        ~ Setup middleware for express to use
- libs          ~ Shared libraries across the different directories
- models        ~ Mongoose Schema definitions declared here
- controllers   ~ Logic to perform actions on models
- routes        ~ Contains the main files associated with a controller
    `paths      ~ Route definitions that map to controllers

```

## Getting Started

#Prereqs - local
    1. MongoDB
    2. Node
    3. MongooseCompass(optional)  -- Recommended to view what is in your mongodb database

To start the local application, run the following commands. 

```
npm install
npm start
```

Access the application at http://localhost:3000

## Database

We use mongoose ORM for connecting to mongodb and making updates to the db.
Upon launching the webserver, it populates your mongodb
instance with the "mangabois" database and collections by loading 
all the fixture files under the dev folder. Fixtures are used to populate
the initial state of the database upon load.