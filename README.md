# Musics Search
This small web application demonstrates the features of AngularJS developed using angular version 1.5.0. In this example I'm using controllers, components, services and testing tools as explained below:

## Development

The development process starts with specifying the required packages and libraries. The application is developed and tested under the nodejs environment. With that regard, the required npm modules are specified in the `package.json` file. 

The angular and other dependencies are installed to this project through bower. These (packages) are specified in `bower.json` file


## Installation
Clone this repo and install all dependencies by using `npm install`. This command will run the npm installation for the reuired nodejs modules and install the bower packages (Mostly used in the application). The bower packages are defined in the `bower.json` and are installed through the npm script `npm postinstall` which is called through in the install command.

## Libraries used

### AngularJS 1.5.0
AngularJS is an MVC framework for the front-end written by Google. This application uses the framework's core and router component.There is only one route defined since its not a large application by design

### Font awesome
Font Awesome is iconic font is used to display the spinning and icon in the web application.

### Sweetalert
This has been used to create the popup. I have customized the stylesheet to fit the scenario

### jQuery
This has been used as a requirement to the Sweetalert library and also to perform some DOM tasks.

## Application partial Structure

The application is structured into 3 main components

### The components
The application has two components namely the
#### Item Card 
This contains the single item definition for the search result items. Its designed to have its own methods and designs according to the different screen sizes
#### The Landing Page
The landing page is not expected to dynamically change that much. Actually the only notable changes are in the design for screen sizes.

### The main views
There is one main view. This is the entry point of the application and is specified with the route /main
### The services
The application uses remote services from `Spotify` ([https://api.spotify.com]). Three endpoints are consumed. 1. Search for albums and artists, 2. Get albums by artist and 3. Get tracks in an album

## Testing 

The application includes two testing types.

### Unit Testing

Each component and service includes a unit test definition. The scripts for this test can be found under the e2e-tests folder in the file named `scenarios.js`
### End To end testing
The application includes end to end test. This is a simple test that loads the main page and looks for a component (the Landing View). The scripts for this test can be found under the e2e-tests folder in the file named `protractor.conf.js`


### Testing process
The test scripts have a common naming convection - name_of_component.spec. To execute the unit tests execute `npm run test` in the terminal at the root of the application.
To execute the end to end tests execute `npm run protractor` in the terminal at the root of the application.
Both tests require the application to be running
The results of executing the tests are included as screenshot images in the test-result folder









