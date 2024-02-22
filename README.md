# A Quick Word
![](https://img.shields.io/badge/javascript-MIT-blue)

**An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.**

## Description
   
  This application leverages Mongo DB, NODE, Express, Mongoose and JAVASCRIPT to created a database for a social media experience that can be traversed through the commandline or terminal of your cpu. It uses CRUD operations to manage and maintain a database comprised of users, and their unique thoughts. Furthurmore, users can post reactions to the posted thoughts by an user and if they choose take on  auser as a new friend.  Using the INSOMNIA program you can easily run these operations with any data you coose based on the shape of the object.
  From there you wil be presented with options that can show you object data of these products and their attributes.


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions & Deployment](#questions)
- [Screen Recording](#screen-recording)

## Installation

  Files can be cloned via github and by using `npm install` for dependencies, and `npm start`, you may access the program from your systems terminal or command line.



## Usage

 This project shows the server side ability to control and manipulate information during development using Mongo through mongoose, node and javascript. below are example shapes in `json` for queries using `insomnia` or `postman`:

  post or put and update user:
  ```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```
**Get and Delete routes are queried by `_id`**

post or put and update thoughts:
```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```
**Get and Delete routes are queried by `_id`**

post reaction:

```json
//example data
{
	"reactionBody":"I like werewolves",
	"username":"thisGUy"
}
```

**Delete routes are queried by `_id`**

## License

This project is licensed under the terms of the MIT .



## Badges

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## How to Contribute

# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, caste, color, religion, or sexual
identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

* Demonstrating empathy and kindness toward other people
* Being respectful of differing opinions, viewpoints, and experiences
* Giving and gracefully accepting constructive feedback
* Accepting responsibility and apologizing to those affected by our mistakes,
  and learning from the experience
* Focusing on what is best not just for us as individuals, but for the overall
  community

Examples of unacceptable behavior include:

* The use of sexualized language or imagery, and sexual attention or advances of
  any kind
* Trolling, insulting or derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or email address,
  without their explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

## Questions and Deployment


For more information click the links below to my Heroku repository as well as my github profile:

GITHUB repository: https://github.com/AnthonyBuffill/aquickword 

GITHUB profile : https://github.com/Anthonybuffill  

Or, email me at : Abuffill@outlook.com


## SCREEN RECORDING

https://drive.google.com/file/d/1KfhO3YRbhaX99oHSSkl2tACPIFlU2R4I/view





    
