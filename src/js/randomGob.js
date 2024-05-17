import image from '../img/goblin.png';

export default class Goblin {
  constructor(board) {
    this.positionGoblin = null; // Здесь хранится текущая позиция гоблина
    this.board = board;
    this.goblinElement = this.createGoblinElement();
  }

  // Создаем элемент <img> для гоблина
  /* eslint-disable class-methods-use-this */
  createGoblinElement() {
    const goblin = document.createElement('img');
    goblin.setAttribute('src', image);
    return goblin;
  }

  addImg() {
    const cells = Array.from(this.board.querySelectorAll('.cell'));
    const goblin = document.createElement('img');
    goblin.setAttribute('src', image);
    // Удаляем изображения из всех ячеек, кроме последней
    cells.forEach((cell) => {
      const img = cell.querySelector('img');
      if (img && img.parentNode === cell) {
        // Проверяем, что изображение находится в ячейке
        img.remove();
      }
    });
    // Получаем список доступных ячеек для добавления изображения гоблина
    const availableCells = cells.filter((cell) => cell !== this.positionGoblin);
    // Выбираем случайную ячейку из доступных
    const position = availableCells[Math.floor(Math.random() * availableCells.length)];
    // Добавляем изображение гоблина в выбранную ячейку
    position.appendChild(goblin);
    // Обновляем позицию гоблина
    this.positionGoblin = position;
  }
}
