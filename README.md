# dogSafe

# Project Description

## dogSafe is a web application that allows users to search a JSON database of food items and discover whether they are safe or unsafe to share with their dogs. Upon completing a successful search that returns a matching food, the application returns a "yes" or "no" reply, and an additional snippet of information providing more context or trivia about the result.

# Instructions

In order to view this project open "index.html" in your browser using Live Server or comparable extension.

# Capstone feature requirements

## Feature 1: Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app.

I use the .length method to count the amount of unique food items in my JSON dataset, and display it in my html.

See lines 25-29 in script.js

## Feature 2: Visualize data in a user friendly way. (e.g. graph, chart, etc)

When my app returns a "yes" or "no" to a user input, the result is assigned different colors depending on the answer. A "no" result will appear in red and a "yes" response will appear in green. This gives the user an immediate visual cue that the result is a green for go or a red for no-go.

See lines 93-101 in script.js

## Feature 3: Retrieve data from a third-party API and use it to display something within your app.

My application fetches a random dog image from an API. I added a query parameter to my fetch in order to only pull gifs. This image is used to add some visual interest and fun to the application.
This is the website where information on the API used in this project can be found: https://www.thedogapi.com/ .

See lines 93-101 in script.js

## Feature 4: Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app.

In my application, information about different food items stored in an array of objects are fetched from a JSON file. These items are accessed by the user through a search bar. I used the filter and includes Javascript methods to sift through the data set and match it to a user inputed string. When there's a matching item found, the application populates the information for the user to read.

See lines 9-77 in script.js
