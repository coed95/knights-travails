export class Board {
    create(rows = 8, columns = 8) {
        const chessboard = document.getElementById("chessboard");

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

                square.addEventListener("click", () => {
                    console.log(`[${square.dataset.column}, ${square.dataset.row}]`);
                });

                chessboard.appendChild(square);
            }
        }
    }
}