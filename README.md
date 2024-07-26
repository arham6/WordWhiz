# WordWhiz

WordWhiz is an engaging and challenging word-guessing game built using the MERN stack. This project enhances the traditional word game experience by incorporating additional features and improvements. Players can enjoy guessing words of varying lengths, receive hints after incorrect guesses, and play multiple words each day. WordWhiz provides a clean and intuitive user interface along with secure user authentication and efficient state management.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
  - [Enhanced Gameplay](#enhanced-gameplay)
  - [Hints System](#hints-system)
  - [Multiple Words per Day](#multiple-words-per-day)
  - [Dynamic Word Length](#dynamic-word-length)
  - [Secure Signup and Login](#secure-signup-and-login)
- [Technologies Used](#technologies-used)
- [Code Implementation](#code-implementation)
  - [Encrypted Passwords](#encrypted-passwords)
  - [State Management](#state-management)
  - [User Interface](#user-interface)
  - [Custom Hooks](#custom-hooks)
- [Game Mechanics](#game-mechanics)

## Introduction
WordWhiz is a captivating word-guessing game where players attempt to identify a hidden word within a limited number of guesses. The game provides hints after incorrect guesses, allows multiple words to be guessed daily, and supports variable word lengths for a dynamic and engaging gameplay experience. Built with the MERN stack, WordWhiz ensures smooth performance and secure user interactions.

![image](https://github.com/user-attachments/assets/7218e3d1-e87e-4af0-b63c-bdecac8db795)

![image](https://github.com/user-attachments/assets/381b50fc-4bbb-4b3c-a456-da2b4a072528)



## Features

### Enhanced Gameplay
WordWhiz offers a more versatile and feature-rich experience compared to traditional word games. It introduces several enhancements to make the gameplay more enjoyable and engaging for users.

### Hints System
Players receive a hint after three incorrect guesses, helping them to guess the word more efficiently. This feature ensures that the game remains challenging yet accessible.

![image](https://github.com/user-attachments/assets/54f3c719-eb6b-4c69-b3b9-4cddc51d9d5d)

![image](https://github.com/user-attachments/assets/b30948f0-6f83-42d7-a686-17497003f3ad)


### Multiple Words per Day
Unlike other word games that limit players to one word per day, WordWhiz allows players to guess multiple words each day. This feature keeps the game exciting and ensures continuous engagement.

![image](https://github.com/user-attachments/assets/4dc1c9ba-8573-4daa-b521-28dce01c4cc8)

![image](https://github.com/user-attachments/assets/43bb20b7-7908-4224-8626-7cb1a4f75a4e)



### Dynamic Word Length
Players can choose to guess words of varying lengths (5, 6, or 7 letters). This dynamic word length feature adds variety to the gameplay, making it more challenging and fun.

![image](https://github.com/user-attachments/assets/42006ee5-d27f-4ea8-8ecc-b908fee06989)


### Secure Signup and Login
- **Signup**: The signup process enforces strong password policies and checks for unique email and username. After a successful signup, a JWT token is generated from the backend and stored in the user's local storage to prevent the need for repeated logins.
- **Login**: Secure login is implemented using JWT tokens. If a valid token is present in local storage, the user is logged in automatically. Otherwise, users can log in using their email and password.

![image](https://github.com/user-attachments/assets/9a4ee3ab-4a5a-4d65-ac3f-f6f2f5f3755e)

![image](https://github.com/user-attachments/assets/86240c77-ba45-490b-b629-e19a92f47d62)

![image](https://github.com/user-attachments/assets/ce1166dd-fd2d-4d8a-bc72-ba48ed8378bd)


## Technologies Used

- **Frontend**: ReactJS
  - **React Context API**: For state management.
  - **Custom Hooks**: For modular and reusable code.
  - **CSS Transitions and Keyframe Animations**: For smooth and engaging UI.
  
- **Backend**: NodeJS, ExpressJS
  - **RESTful API**: For efficient communication between the frontend and backend.
  - **JWT Authentication**: For secure user authentication and session management.
  
- **Database**: MongoDB
  - **Mongoose**: For data modeling and interaction with the MongoDB database.
  
- **Authentication**: JSON Web Tokens (JWT), bcrypt
  - **JWT**: For secure authentication and session management.
  - **bcrypt**: For secure password hashing and storage.

## Code Implementation

### Encrypted Passwords
Passwords are securely stored in the database using bcrypt for encryption, ensuring user data protection and security.

### State Management
- **Custom React Context Hook**: Used for generating random words to guess and managing the authentication state.
- **Reducer Hook**: Manages the state of JWT tokens efficiently, ensuring a seamless and secure user experience.

### User Interface
WordWhiz boasts a clean and aesthetically pleasing user interface. The UI is designed with user experience in mind, featuring smooth CSS transitions and keyframe animations for an engaging visual experience.

### Custom Hooks
Custom React hooks are utilized to implement the game's functionality. These hooks make the codebase more modular, maintainable, and reusable.

## Game Mechanics

### Objective
The objective of WordWhiz is to guess the hidden word within a limited number of attempts. Players input their guesses, and the game provides feedback on the accuracy of each guess.

### Gameplay Flow
1. **Start the Game**: Upon starting the game, a random word is selected for the player to guess.
2. **Input Guess**: Players enter their guesses into the input field.
3. **Receive Feedback**: After each guess, players receive feedback indicating which letters are correct and in the correct position, which letters are correct but in the wrong position, and which letters are incorrect.
4. **Hints**: If players make three incorrect guesses, they receive a hint to assist them.
5. **Win or Lose**: Players continue guessing until they either correctly identify the word or exhaust their allowed number of guesses.

### Security Features
- **JWT Authentication**: Ensures secure user authentication and session management.
- **Password Encryption**: User passwords are stored securely in the database using bcrypt.
- **Route Protection**: Url and Backedn routes are secured with the help of JWT Tokens to prevent unauthorized access.
