# Backend API to store User and Address

## Overview

This backend project manages User and Address entities with a One-to-Many relationship. Each user can have multiple address, but each address belongs to a single user. This project provides a set of APIs for managing users and their associated addresses.

### Technologies Used

NodeJs, ExpressJs, MySQL Database, Sequelize ORM

### Database Schema

### User Table

| Field    | Type         | Description     |
| -------- | ------------ | --------------- |
| id       | Integer (PK) | Unique for user |
| username | String       | Unique Username |

### Address Table

| Field   | Type         | Description                              |
| ------- | ------------ | ---------------------------------------- |
| id      | Integer (PK) | Unique for address                       |
| address | String       | Address of user                          |
| user_id | Integer (FK) | Foreign Key referencing id of User Table |

### Relationship

> - A user can have multiple addresses (One-to-Many relationship).
> - Each Address belongs to one User

## API Endpoints

1.  GET /user

    > - Retrieves a list of all users.

2.  GET /user/{userId}

    > - Retrieves a specific user by ID and returns all addresses associated with that user.

3.  POST /register > - Creates a new user and address

### Project Setup Instructions

    1. Clone git repository using "git clone https://github.com/MukundKumar99/smoke-trees-assignment".

    2. Install Dependencies by running "npm install".

    3. Create .env file and enter "USER_NAME", "PASSWORD" and "DB_NAME" for local server.

    4. Run "npm start" to start the server.

### Github Repository Link

https://github.com/MukundKumar99/smoke-trees-assignment
