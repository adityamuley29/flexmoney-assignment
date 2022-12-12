# _Flexmoney Assignment_

### I have used the MERN Stack (i.e. MongoDB Express.js React.js Node.js) technology to complete this assignment.

#

## **# APPROACH**

So there are total 3 sub-problem to solve the given problem.

1. Designing/Developing (Frontend) - React.
2. Creating REST API (Server) - Express.
3. Creating database schema (Database) - MondoDB.

#

### # Basic Workflow

**React.js <--> Express.js(Node.js) <--> MongoDB**

#

## **# Explanation**

1.  **<ins>Frontend(React.js)</ins>** :-  
    First of all I build a user interface. Make some components called **Form** & **ConfirmOrder** and style them and other page.<br><br>
    Then, I write some function's which is use to call the REST API and send the data from some client to server after complete from filling and validating the user data.
<br><br> 
    > Directory structure of **CLIENT**:-<br>

        // + refer as close folder
        // - refer as open folder
        // > refer as file
        
        
        - client
            + public
            - src 
                - components
                    > ConfirmOrder.js
                    > Form.js
                > App.css
                > App.js
                (rest files)
            > package-lock.json
            > package.json<br>
    <br>

2.  **<ins>Building REST API(Express.js)</ins>** :-  
    After completing the frontend part, I start developing the backend by creating express app which runs on PORT 5000 .<br><br>
    Created a **POST** end-point (i.e. **/api/user/register**) for accepting the data from the client.
    <br><br>
    Then writen the function for the above created end-point. Which is a async function because we want to work with the data. <br>
    This function extract's the data from the request and validate the the data as per the problem statement.<br> <br>
    Then after validating the collection of that is created in database(i.e. will be building in next step).
    And then we will be sending the response according to the validation.<br><br>
    _if_ : data is correct then send success with status code 200 the message.<br>
    _else_ : send the other response depending upon validation.<br><br>

    > Directory structure of **SERVER**:-

            // + refer as close folder
            // - refer as open folder
            // > refer as file
            
            
            - server
                - controllers
                    > UserController.js
                - db
                    > database.js
                - models
                    > UserModel.js
                - routes
                    > UserRoute.js
                > index.js
                > package-lock.json
                > package.json

<br>
<br>

3.  **<ins>Database(MongoDB)</ins>** :-
    After the creating the end-point, we need to store the data in database that we have extracted from request.<br>
    So, created the model in Express app called **UserModel** and then connected the Express App to MongoDB.<br><br>
    To write the mongoDB schema cleaner and easy to write I have used mongoose which proves the straight fordward, schema-based solution to model. It includes casting validation, query building etc... <br>

    > User Model Schema Attributes

            + name
            + email
            + age
            + batch
            + monthlyFee
