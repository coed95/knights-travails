import knightImage from "./knight.svg";
console.log("Knight URL: ", knightImage);

export class Board {
    constructor() {
        this.positions = {
            start: null,
            end: null
        };
    }

    create(rows = 8, columns = 8) {
        const chessboard = document.getElementById("chessboard");

        let knightPosition = null;
        let markedSquare = null;

        for (let row = 0; row < rows; row++) {
            for (let column = 0; column < columns; column++) {
                const square = document.createElement("div");
                square.classList.add("square");

                if ((row + column) % 2 === 0) {
                    square.classList.add("white");
                }
                else {
                    square.classList.add("black");
                }

                // this shows [1, 1] rather than [0, 0]
                square.dataset.row = rows - row;
                square.dataset.column = column + 1;

                // left click to place a knight from where to start the travail
                square.addEventListener("click", () => {
                    if (knightPosition) {
                        knightPosition.innerHTML = ''; // remove the knight from its previous position
                    }

                    const knight = document.createElement("div");
                    knight.classList.add("knight");
                    knight.style.backgroundImage = `url(${knightImage})`;
                    square.appendChild(knight);
                    knightPosition = square;

                    this.positions.start = [parseInt(square.dataset.row), parseInt(square.dataset.column)];

                    console.log(`[${square.dataset.column}, ${square.dataset.row}]`);
                });

                // right click to place an end point to where the knight should stop
                square.addEventListener("contextmenu", (event) => {
                    event.preventDefault(); // prevent the default context menu from appearing
                    
                    if (markedSquare) {
                        markedSquare.classList.remove("marked");
                    }

                    square.classList.add("marked");
                    markedSquare = square;

                    this.positions.end = [parseInt(square.dataset.row), parseInt(square.dataset.column)];

                    console.log(`[${square.dataset.row}, ${square.dataset.column}]`);
                });

                chessboard.appendChild(square);
            }
        }
    }

    clear() {
        const chessboard = document.getElementById("chessboard");

        const knights = chessboard.querySelectorAll(".knight");
        knights.forEach(knight => {
            knight.parentNode.removeChild(knight);
        });

        const markedSquares = chessboard.querySelectorAll(".marked");
        markedSquares.forEach(square => {
            square.classList.remove("marked");
        });

        this.positions.start = null;
        this.positions.end = null;

        console.log("Board cleared.");
    }
}