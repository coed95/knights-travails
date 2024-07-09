import "./styles.css";
import { Board } from "./board.js";
import { knightMoves } from "./knight.js";

document.addEventListener("DOMContentLoaded", (event) => {
    const board = new Board();
    board.create();

    const startButton = document.getElementById("startTravails");
    startButton.addEventListener("click", () => {
        if (board.positions.start && board.positions.end) {
            const shortestPath = knightMoves(board.positions.start, board.positions.end);
            console.log("Shortest path:", shortestPath);

            // implement logic to highlight shortest path on chessboard if needed
        }
        else {
            alert("Please set both start and end positions.");
        }
    });

    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", () => {
        board.clear();
    });
});