export default class Board {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
  }

  createGameBoard() {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.gameBoard.appendChild(cell);
      }
    }
  }

  returnGameBoard() {
    return this.gameBoard;
  }
}
