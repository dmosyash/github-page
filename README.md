# GitHub User Page

[Click here to see the live App](https://github-userpage.netlify.com/)

This application is developed in Reactjs.

## Structure of the App

The App is developed in ReactJs. It is created with the help of **React cli**.No libraries are used for CSS and modeling purpose. It consists of only one page. This page has 2 panels

- Left Panel
- Right Panel

### Left Panel
It is created by a Component(container component) called LeftPanel, this component is called in App component, so need to write only once in the whole app. This component is responsive, in small screens it shift to top of the app. It gets its data from github api for user profiles.

#### Right Panel
This is a smart component which shows all the reposetories of the user. It has some filters also, which are functional. It gets its data from github api for user's repositories.

### Services
For calling APIs and handling other details like *base URL* etc. It has constants.js file which have constants for the application.