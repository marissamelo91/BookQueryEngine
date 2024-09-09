# BookQueryEngine

## Description
This project is a Book Search Engine application built using the MERN stack, which stands for MongoDB, Express.js, React, and Node.js. The app allows users to search for books using the Google Books API and save their search results. Originally built with a RESTful API, this challenge involves refactoring the API to use GraphQL with Apollo Server.

## Features
1. Book Search: Search for books using the Google Books API.
2. Save Searches: Save your book searches to a MongoDB database.
3. GraphQL API: Refactor the existing RESTful API to use GraphQL with Apollo Server.
4. Authentication: Maintain user authentication in the context of a GraphQL API.
5. Deployment: Deploy the application to Render.

## Getting Started
1. Node.js and npm installed
2. MongoDB instance (local or cloud-based)
3. Render account for deployment

## Setup Instructions
1. Clone the repository to your local machine
2. Install dependencies using npm install
cd server
npm install
cd ../client
npm install
3. Set Up Environment Variables
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Replace your_mongodb_connection_string with your MongoDB URI and your_jwt_secret_key with your JWT secret.
4. Configure Apollo Server
In the server directory, refactor the existing RESTful routes to GraphQL queries and mutations using Apollo Server.
Update the authentication middleware to work with GraphQL.
5. Set Up Apollo Provider
In the client directory, install @apollo/client: npm install @apollo/client graphql
Configure the Apollo Provider in your React app to connect to the Apollo Server.
6. Run the Application Locally
Start the server and client: cd server
npm start
cd ../client
npm start
Your application should now be running at http://localhost:3000.

## Contact
Feel free to reach out to me if you have any questions or feedback! </br>
Email: marissa.melo91@yahoo.com </br>
GitHub: https://github.com/marissamelo91 </br>


