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

To start the local application, run the following commands. 

```
npm install
npm start
```

Access the application at http://localhost:3000