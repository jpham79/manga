Project Structure:
```
frontend/src         ~ Top Level Directory
    - actions        ~ Holds the action files for every store interaction
    - reducers       ~ Holds all reducers that pertain to the store structure
    - components     ~ Shared functional components
    - root           ~ The root of the application
    - store          ~ Holds the base classes for redux store
        - actions       ~ Creates object with action type and payload
        - actionTypes   ~ List of all the possible actions
        - reducers      ~ Processes an action object and updates the state of the store
        - store         ~ Holds overall application state   
    - view            ~ Compositions of higher order components and functional components to create a page
```


## Frontend design composition

If you aren't familiar with redux, please give that a look. 
Our frontend is built using react and redux. This means that cross application state
and http requests must be maintained with the redux (We will be using axios for http requests).

When making a view the hierarchy is:

    - Higher order component    ~ Interacts and receives updates from the store
        * Dispatches actions and requests to the store
        * Gives and receives data from functional components
        * Composes the layout of the functional components to form a view

        - Functional component      ~ Receives data from higher order component and displays it

    - view
        - view folder
            - higher order component
            - functional components
            - css


## Crash course redux

    Interactions with the store are handled through actions and reducers.
    A higher order component will dispatch an action to a reducer.
    The reducer processes that action and updates the store.
    The higher order component receives the updated store information and passes it to
    its functional components.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
