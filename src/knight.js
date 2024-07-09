export function knightMoves(start, end) {
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    // check if a position is within the bounds of the chessboard
    function isValidPosition(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    // find the shortest path
    function bfs(start, end) {
        const queue = [[start]];
        const visited = new Set();
        visited.add(start.toString());

        while (queue.length > 0) {
            const path = queue.shift();
            const [x, y] = path[path.length - 1];

            // if we reached the end position, return the path
            if (x === end[0] && y === end[1]) {
                return path;
            }

            // explore all possible moves
            for (const [dx, dy] of knightMoves) {
                const newX = x + dx;
                const newY = y + dy;

                if (isValidPosition(newX, newY) && !visited.has([newX, newY].toString())) {
                    visited.add([newX, newY].toString());
                    queue.push([...path, [newX, newY]]);
                }
            }
        }
    }

    return bfs(start, end);
}