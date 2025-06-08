# mini-project-simple-fullstack-signup-form

## What?

#### A plain html ui to accept user's details(name, email, password) for sign up & save to the database

## How to use the program?

#### Download the repo. Install "nodeJs". Start the server on localhost by running "node backend/index.js" command. Navigate to the url in a web browser, fill & and submit the sign up form.

## How?

#### App uses prisma/sqlite for database design. Express is used to implement server side CRUD logic(Although frontend UI only uses POST method to create as of now).

#### Frontend side only uses vanilla html form & sends data using action/method attributes of the <form> element