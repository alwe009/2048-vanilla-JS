import Grid from "./Grid.js";

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.randomEmptyCells().tile = new Tile(gameBoard);
grid.randomEmptyCells().tile = new Tile(gameBoard);
