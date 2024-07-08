import "./styles.css";

import { Board } from "./board.js";

document.addEventListener("DOMContentLoaded", (event) => {
    const board = new Board();

    board.create();
});