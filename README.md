## About
This Project is represents a solution to the to the Just Eat (JET) Early Careers Software Engineering Program coding assignment. This project retrieves restaurant data from the provided JET API, extracting four key points list within the brief: name, cuisines, rating, and address.Please note that the API endpoint is not provided in this README.

The application utilises a web-based user interface (UI) where users can enter a postcode to fetch restaurant results. The first ten results are displayed in individual cards, each containing the relevant data points in a structured format.

## Installation

### **Pre-requisites**
The following pre-requisites should be installed before running The Project:

- [Node.js](https://nodejs.org/) - Long term service (LTS) version recommended
- [npm](https://www.npmjs.com/) - comes with Node.js
- [Webpack](https://webpack.js.org/guides/getting-started/) - refer to **build**
- [Git](https://git-scm.com/) - Recommended tor cloning the repository


### **Clone the Repository**
Clone this Project using Git and by using the following command:

    `git clone https://github.com/J-Spinks/jet-assignment.git`

Then navigate to the project directory.

Alternatively, a clone of the Project can be downloaded via .zip file on GitHub by following the https link above.


### **Install dependencies**
Once the repository has been cloned, run the following command to install all
necessary packages and dependencies:

    `npm install`

### **Bundle packages**
To bundle the project, run:

    `npx webpack`

This will generate the dist/ folder with the production files inside.

To ensure the API is called correctly and enable live reloading, start the Webpack development server:

    `npx webpack serve`

The the Webpack development server is accessed in the browser via http://localhost:8080/

### **Installation troubleshooting**
If you encounter any dependency-related errors, try reinstalling the required packages:

    `npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader`

Then rebundle the project by running:

    `npx webpack`

This ensures that all necessary Webpack-related packages are installed. You can then restart the Webpack development server.

For any further installation issues please contact the author. Details found below in ## Contact.

## Technology Stack
This Project utilises [Node.js] and Webpack modules for efficient API handling.

### **Node.js**
[Node.js] is a JavaScript runtime environment that allows JavaScript to run outside of the web browser. It is therefore well suited for working with APIs because it can efficiently  handle asynchronous tasks without blocking other operations.

### **Webpack**
Webpack is one of the most popular JavaScript bundlers and includes features that enhance API handling.

The following Webpack features have been utilised in this Project:

  - Proxying API Requests in Development: – Prevents CORS (Cross-Origin Resource Sharing) issues by forwarding API requests to the backend.
  - Live Module Replacement: Refreshes only the necessary parts of the application when API data updates, improving development efficiency.
  - Bundling & Minification: Optimises JavaScript files for better performance and scalability, reducing file sizes for faster load times.


## Project Assumptions
1. The challenge brief states that four data points should be displayed: Name, Cuisines, Rating (as a number), and Address. As the API provided for the challenge is an extract of the JET database, it is assumed that the coding challenge is intended to simulate a realistic work task for junior developers at JET. Therefore, the Project solution presents the data in a format similar to that found on the JET website.

2. In alignment with Assumption 1, and to align with the card formate use by JET, a placeholder image has been included. While this is not explicitly required by the challenge, it has been assumed that incorporating this logo element enhances the visual consistency with the JET platform.

3. This solution allows users to request restaurant information from the JET API by submitting a postcode. It is assumed that the reviewer expects a dynamic solution where multiple postcode searches can be performed rather than a single static request.

4. It is assumed that the project will be accessed via a laptop or desktop with a larger screen. Therefore the UI within this project has not currently optimised for smaller screens.

## Future Improvements

1. Optimise API request: There is a noticeable delay when retrieving API results. Future iterations of this project should focus on optimising API calls to improve response time. Possible enhancements include:
  - Reducing the API Call Size: Investigating the amount of data being returned and limiting it to only the essential fields.
  - Optimising the Webpack Proxy in Development: Exploring methods such as data compression or caching to speed up responses.
  
2. Improve the UI experience: As listed within assumption 4, the this project has not optimised the UI for smaller devices. Optimising the UI for different screen sizes is essential for ensuring a seamless and user-friendly experience across device types and should be prioritised upon any update.

## Contact
Any thoughts? Please let me know:

- Email: joe-spinks@live.co.uk
