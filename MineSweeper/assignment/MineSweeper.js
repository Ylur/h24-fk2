// 1.2 reformattað

const boardSize = 10;
const bombCount = 10;
let gameBoard = [];
let bombPositions = [];
let gameEnded = false;

// Initialize the game
function initGame() {
  const gameBoardElement = document.getElementById("game-board");
  gameBoardElement.innerHTML = ""; // Clear the board
  gameEnded = false; // Reset game state

  gameBoard = [];
  bombPositions = generateBombs(boardSize, bombCount);

  for (let row = 0; row < boardSize; row++) {
    const rowArray = [];
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // On left-click element
      cell.addEventListener("click", () => revealCell(row, col));

      // On right-click element
      cell.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        toggleFlag(row, col);
      });

      rowArray.push(cell);
      gameBoardElement.appendChild(cell);
    }
    gameBoard.push(rowArray);
  }
}

// Generate bomb positions randomly
function generateBombs(size, count) {
  const bombs = new Set();
  while (bombs.size < count) {
    const position = Math.floor(Math.random() * size * size);
    bombs.add(position);
  }
  return Array.from(bombs);
}

// Reveal a cell when clicked
function revealCell(row, col) {
  if (gameEnded || gameBoard[row][col].classList.contains("revealed")) {
    return;
  }

  const index = row * boardSize + col;

  if (bombPositions.includes(index)) {
    gameBoard[row][col].classList.add("bomb");
    gameBoard[row][col].innerHTML = "💣"; // Bomb emoji
    endGame(false);
  } else {
    const bombCount = countBombsAround(row, col);
    gameBoard[row][col].classList.add("revealed");
    if (bombCount > 0) {
      gameBoard[row][col].innerHTML = bombCount;
    } else {
      revealEmptyCells(row, col); // Reveal adjacent empty cells
    }
  }
  checkWinCondition();
}

// Count bombs around a cell - litla ruglið
function countBombsAround(row, col) {
  let count = 0;

  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r >= 0 && r < boardSize && c >= 0 && c < boardSize) {
        const index = r * boardSize + c;
        if (bombPositions.includes(index)) {
          count++;
        }
      }
    }
  }

  return count;
}

// Recursively reveal all empty cells around a cell with no bombs
function revealEmptyCells(row, col) {
  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r >= 0 && r < boardSize && c >= 0 && c < boardSize) {
        if (!gameBoard[r][c].classList.contains("revealed")) {
          revealCell(r, c);
        }
      }
    }
  }
}

// Toggle flagging on a cell
function toggleFlag(row, col) {
  if (gameEnded || gameBoard[row][col].classList.contains("revealed")) {
    return;
  }

  if (gameBoard[row][col].innerHTML === "") {
    gameBoard[row][col].innerHTML = "🚩"; // Flag emoji
  } else if (gameBoard[row][col].innerHTML === "🚩") {
    gameBoard[row][col].innerHTML = ""; // Remove flag
  }
}

// Reveal all bombs when the game is over
function revealAllBombs() {
  for (let i = 0; i < bombPositions.length; i++) {
    const row = Math.floor(bombPositions[i] / boardSize);
    const col = bombPositions[i] % boardSize;
    gameBoard[row][col].classList.add("bomb");
    gameBoard[row][col].innerHTML = "💣"; // Show bomb emoji
  }
}

// End the game (either won or lost)
function endGame(won) {
  gameEnded = true;
  if (won) {
    alert("Congratulations, You Win!");
  } else {
    alert("Game Over! Click Click BOOOM!");
    revealAllBombs();
  }
}

// Check if the player has won
function checkWinCondition() {
  let allCellsRevealed = true;
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const index = row * boardSize + col;
      if (
        !bombPositions.includes(index) &&
        !gameBoard[row][col].classList.contains("revealed")
      ) {
        allCellsRevealed = false;
        break;
      }
    }
  }

  if (allCellsRevealed) {
    endGame(true);
  }
}

// Reset the game
function resetGame() {
  initGame();
}

// Initialize the game when the page loads
window.onload = initGame;
