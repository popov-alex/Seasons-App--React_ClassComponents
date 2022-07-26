# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## General Description of the Project

This is an educational project, the goal of which was to practice React datastructures and syntax.

The application itself is not really useful, as it only identifies whether the user is in the Southern or Northern Hemisphere and whether it is summer or winter for him/her respectively.

However, even with such a limited functionality, this application contains the core React data structures and uses modern React syntax.

Specifically, this application is built with the class based component called App, which is as we know must be a JavaScript class that extends the subclass of or the super class of React component.

The App component has a state, which makes it a little bit easier to handle user input and in our case, respond to data loading events. State is a JS Object that contains data relevant to the component, in our case data re location of the user.

State is a part of constructor function of the class component and even if we omit the constructor function, Babel adds it behind the scenes.

With the class-based components, we can make use of life cycle methods. This App uses the componentDidMount() method to update the state with the setState() function. We know that setState() is the only valid way to update the state of a component in React.

The App component of course has a render() method which is a must-have for components in React.
