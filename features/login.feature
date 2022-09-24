Feature: Login action

As a user
I want to login into application

Scenario: Login with valid credentials
 Given I visit a login page
 When I fill the login form with valid credentials
 Then I should see the home page

Scenario Outline: Login with invalid credentials
 Given I visit a login page
 When I fill the login form with invalid '<Username>' and '<Password>' and click on login button
 Then error '<message>' should be displayed
 Examples:
     | Username | Password |message|
     | tes1     | password1 |Epic sadface: Username and password do not match any user in this service|
     | test2    | password123|Epic sadface: Username and password do not match any user in this service|
     |test3     | password3|Epic sadface: Username and password do not match any user in this service|

