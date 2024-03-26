# Tic-Tac-Toe Game

This repository contains a JavaScript implementation of a Tic-Tac-Toe game with different difficulty levels.

## Table of Contents

- [Overview](#overview)
- [Game Logic](#game-logic)
- [Code Structure](#code-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Tic-Tac-Toe game is a classic two-player game where players take turns marking spaces in a 3x3 grid. The objective is to get three of your marks in a row, column, or diagonal.

In this project, we have implemented a Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game features multiple difficulty levels, allowing players to challenge themselves against a computer opponent with varying degrees of intelligence.

## Game Logic

The game logic is structured as follows:

- The game board is represented by a 3x3 grid of squares.
- Players can choose their mark (X or O) and take turns placing it on an empty square.
- The computer AI provides different levels of challenge:
  - Easy: The computer makes random moves without much strategy.
  - Medium: The computer employs some strategy to make intelligent moves.
  - Hard: The computer plays at an advanced level, making it challenging to win.
- The game checks for a winner after each move and displays the result.

## Code Structure

The main JavaScript code for the game is organized into different functions:

- `computerTurn()`: Implements the logic for the computer's turn in the easy difficulty level.
- `computerTurnMedium()`: Implements the logic for the computer's turn in the medium difficulty level.
- `levelOne()`, `levelTwo()`, `levelThree()`: Functions to set up different game difficulty levels.
- `checkWinner()`: Checks for a winner after each move and updates the game state.

You can find the detailed code in the `script.js` file.

## Usage

To run the game, simply open the `index.html` file in a web browser. Choose the difficulty level (Easy, Medium, or Hard) and start playing against the computer.

## Contributing

If you'd like to contribute to this project, you can fork the repository and submit a pull request with your changes. Feel free to add new features, improve the AI logic, or enhance the user interface.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
