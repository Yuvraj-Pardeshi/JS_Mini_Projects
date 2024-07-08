let currentPlayer = 'X';
let game = [];
let gridsize = 3; // Default grid size

let xWins = 0;
let oWins = 0;
let draws = 0;

function startGame() {
    gridsize = parseInt(document.getElementById('grid-size').value, 10);
    createBoard();
    addListener();
}

function createBoard() {
    document.querySelector('.tic-tac-toe').innerHTML = '';
    for (let i = 0; i < gridsize; i++) {
        const rowref = document.createElement('div');
        rowref.className = 'row';
        for (let j = 0; j < gridsize; j++) {
            const cellref = document.createElement('div');
            cellref.className = 'cell';
            rowref.append(cellref);
            cellref.setAttribute("data-row", i);
            cellref.setAttribute("data-cell", j);
        }
        document.querySelector('.tic-tac-toe').append(rowref);
    }
    game = Array(gridsize).fill().map(() => Array(gridsize).fill(null));
}

function addListener() {
    const boardref = document.querySelector(".tic-tac-toe");
    boardref.addEventListener('click', (e) => {
        if (e.target.classList.contains("cell")) {
            const rowid = e.target.dataset.row;
            const cellid = e.target.dataset.cell;
            if (!game[rowid][cellid]) {
                e.target.innerText = currentPlayer;
                updateGameData(rowid, cellid, currentPlayer);
                const winner = getWinner();
                if (winner) {
                    if (winner === 'X') {
                        xWins++;
                        document.getElementById('x-wins').innerText = xWins;
                    } else if (winner === 'O') {
                        oWins++;
                        document.getElementById('o-wins').innerText = oWins;
                    }
                    alert(`${winner} wins!`);
                    createBoard(); // Reset the board
                } else if (isDraw()) {
                    draws++;
                    document.getElementById('draws').innerText = draws;
                    alert("It's a draw!");
                    createBoard(); // Reset the board
                } else {
                    changePlayer();
                }
            }
        }
    });
}

function updateGameData(row, col, value) {
    game[row][col] = value;
}

function getWinner() {
    // Check rows
    for (let i = 0; i < gridsize; i++) {
        if (checkLine(game[i])) {
            return game[i][0];
        }
    }
    // Check columns
    for (let i = 0; i < gridsize; i++) {
        const columnValues = game.map(row => row[i]);
        if (checkLine(columnValues)) {
            return columnValues[0];
        }
    }
    // Check diagonals
    const diagonalValues1 = game.map((row, ind) => row[ind]);
    if (checkLine(diagonalValues1)) {
        return diagonalValues1[0];
    }
    const diagonalValues2 = game.map((row, ind) => row[gridsize - ind - 1]);
    if (checkLine(diagonalValues2)) {
        return diagonalValues2[0];
    }
    return null;
}

function checkLine(arr) {
    return arr.every((data) => data !== null && data === arr[0]);
}

function isDraw() {
    return game.flat().every(cell => cell !== null);
}

function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Initialize the game with the default grid size
startGame();
