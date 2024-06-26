# Dogs Service API
![image](https://github.com/gitbiruk2010/Building-and-Exploring-Controllers-in-NestJS/assets/103274295/5ec2daa3-851e-4569-9fe0-7cb6d31fea29)
![image](https://github.com/gitbiruk2010/Building-and-Exploring-Controllers-in-NestJS/assets/103274295/e3c3882c-46a9-435a-a13e-bb0ba531c3c0)
![image](https://github.com/gitbiruk2010/Building-and-Exploring-Controllers-in-NestJS/assets/103274295/88dfa1b8-72d8-4259-a645-e88ba65709c6)
![image](https://github.com/gitbiruk2010/Building-and-Exploring-Controllers-in-NestJS/assets/103274295/efc77ee6-a304-4121-bcb7-0aef55faa55e)
![image](https://github.com/gitbiruk2010/Building-and-Exploring-Controllers-in-NestJS/assets/103274295/f9ac329d-6b27-42b1-8725-24bfc2046df1)
![image](https://github.com/gitbiruk2010/Building-and-Exploring-Controllers-in-NestJS/assets/103274295/25811451-fef5-462e-b185-ae65bab8d7d5)

This project is a simple NestJS application demonstrating basic CRUD operations for a "Dogs" resource. The application allows you to create, read, update, and delete dog entries.

## Getting Started

### Prerequisites

- Node.js
- npm
- Git
- Postman (for testing the API endpoints)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/gitbiruk2010/Building-and-Exploring-Controllers-in-NestJS
   cd dogs-service
## Install dependencies
- npm install
## Start the application
npm run start
The application will start on http://localhost:3000.
To test: npm run test

## API Endpoints With Postman
1. GET /dogs

Retrieve a list of all dogs.

    Method: GET
    URL: http://localhost:3000/dogs
    Expected Response: Json []
    
2. POST /dogs

Create a new dog entry.

    Method: POST
    URL: http://localhost:3000/dogs
    Body:

    json
{
  "name": "Rex",
  "age": 2
}

Expected Response:

{
  "id": <unique_id>,
  "name": "Rex",
  "age": 2
}

3. GET /dogs/:id

Fetch a single dog by ID.

    Method: GET
    URL: http://localhost:3000/dogs/<unique_id> (replace <unique_id> with the actual ID received from the POST response)
    Expected Response:
{
  "id": <unique_id>,
  "name": "Rex",
  "age": 2
}

4. PUT /dogs/:id

Update a dog entry by ID.

    Method: PUT
    URL: http://localhost:3000/dogs/<unique_id> (replace <unique_id> with the actual ID)
    Body:

{
  "name": "Max",
  "age": 3
}

Expected Response:

    {
      "id": <unique_id>,
      "name": "Max",
      "age": 3
    }

5. DELETE /dogs/:id

Delete a dog entry by ID.

    Method: DELETE
    URL: http://localhost:3000/dogs/<unique_id> (replace <unique_id> with the actual ID)
    Expected Response:

       {
      "message": "Dog deleted",
      "deletedDog": [
        {
          "id": <unique_id>,
          "name": "Max",
          "age": 3
        }
      ]
    }

6. GET /dogs/:id (Non-existing dog)

Fetch a dog by an ID that does not exist.

    Method: GET
    URL: http://localhost:3000/dogs/999 (an ID that does not exist)
    Expected Response:

{
  "statusCode": 404,
  "message": "Dog not found",
  "error": "Not Found"
}
