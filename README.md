# Company-Profile System

Welcome to the Company-Profile System repository! This project allows interaction with company database system through RESTful APIs. Follow the instructions below to set up and run the project.


## Installation

```sh
git clone https://github.com/sarangkulkarni99/company-profile.git
cd company-profile
```

## Prerequisites

Before you begin, make sure you have the following software installed:

- Node.js (v16.16.0 or higher)
- TypeScript (v5.1.6 or higher)
- npm (v8.11.0 or higher)

You can install TypeScript globally by running:

```sh
npm install -g typescript
```

Install project dependencies using npm:

```sh
npm install
```
## Database Setup:

This project uses postgreSQL database. Download and install pgAdmin to interact with the database. Also download postgreSQL latest version.

After setup, create a database name of your choice. 

## Running the Server

Before starting the, server create a .env file and add the following variables in it with values of your choice.

```sh
PORT
HOST
DBPORT
DATABASE
DIALECT
USER
PASSWORD
```

To start the server, use the following command:

```sh
npm run start:dev
```
The server will run on port 3000. Please ensure that no other service is using the same port.

## Communication Endpoint

Download and open the Postman application. Following are the endpoints for the application:

### Create Customer with Input Validation
```bash
POST http://localhost:${PORT}/customer/create
```

### Get All customers with search query and pagination
```bash
POST http://localhost:${PORT}/customer/getAllCustomers
```

For the request body, select:

    Type: raw
    Format: JSON
    Body: {
      "search": "Ahmedabad",
      "page": 1,
      "limit": 1
    }

### Get one customer
```bash
GET http://localhost:${PORT}/customer/1
```

### Get unique customer list and count based on city
```bash
GET http://localhost:${PORT}/customer/uniqueCityCustomerList
```

Feel free to customize the payload search based on firstName, lastName and city as needed.

