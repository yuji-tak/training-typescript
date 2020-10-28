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

  private _activeElements: HTMLDivElement[] = [];
  private _activeElementsScore: number[] = [];
  // get構文は、オブジェクトのプロパティに関数を結びつけ、プロパティが参照された時に関数が呼び出されるようする
  get activeElements() {
    this._activeElements = [];
    this.elements.forEach(element => {
      if (element.classList.contains('food--active')) {
        this._activeElements.push(element);
      }
    })
    return this._activeElements;
  }

  get activeElementsScore() {
    this._activeElementsScore = [];
    this.activeElements.forEach(element => {
      const foodScore = element.querySelector('.food__score');
      if (foodScore) {
        this._activeElementsScore.push(Number(foodScore.textContent));
      }
    })
    return this._activeElementsScore;
  }

  constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
}
const foods = new Foods()
