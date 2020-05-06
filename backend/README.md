# Handling Member's login


# Get all members 
GET - http://localhost:5000/api/members

# Get Single Member
GET - http://localhost:5000/api/members/:id

# Create new app member
POST - http://localhost:5000/api/members
{
"name": "test",
"email": "test@test.com",
"password": "123456"
}

# Updating details
PUT - http://localhost:5000/api/members/:id
{
"name": "test",
"email": "test@test.com",
"password": "123456"
}

# Delete a Member
Delete - http://localhost:5000/api/members/:id


# How to run
1. Run `npm install`
2. Run `npm start`
3. Visit http://localhost:5000/ to ensure this works