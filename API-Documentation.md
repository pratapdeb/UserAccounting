# `User Accounting API Document!`

An REST API to fetch,store,delete and update user 

## Requirements
`node js installed in the system`

## User Guide
`1. Run the server create a .env file and make the following entries: `
PORT = <Port to run the REST APIserver> 
MONGODB_URL =<your mongodb url with username and password>

`2. Use postman to test the API endpoints`


## API Endpoints 
`/user/getAllUsers`:  Return all the users in the database in as an array
`/user/saveUser`:  Save a single user into the database
`/user/deleteUser`: Delete a single user (id passed as quary param)
`/user/updateUser`: Update user infomation(city as of now)
`/user/getUser`: Get asingle user based on id provided as quary param
