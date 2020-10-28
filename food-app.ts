class Score { }

class Food {
  constructor(public element: HTMLDivElement) {
    // イベントリスナーの中でthisを使用する場合の制御
    element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    this.element.classList.toggle('food--active');
  }
}

class Foods {
  elements = document.querySelectorAll<HTMLDivElement>('.food');
  constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
}
const foods = new Foods()
