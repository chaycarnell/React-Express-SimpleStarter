# All in one react + express app

A simple all in one backend + client app template

### Getting Started

To get started:

1. Clone from this repo and run 'yarn install' from a terminal within the app's root directory
2. The app can be launched locally for development using 'yarn dev-client' & 'yarn dev-server'
3. To test the application run 'npm test', this will trigger the Jest testing suites to execute in the terminal
4. This application has a couple of hooks to enforce code quality using Husky, commits to Git will trigger a prettier run against the code, push's will run the test suite first and then run an Eslint. If any of these produce issues the process will fail.
