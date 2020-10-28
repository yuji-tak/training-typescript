interface Scoreable {
  readonly totalScore: number;
  render(): void;
}

class Score implements Scoreable {
  private static instance: Score;
  get totalScore() {
    const foods = Foods.getInstance();
    return foods.activeElementsScore.reduce((total, score) => total + score, 0)
  }
  render() {
    document.querySelector('.score__number')!.textContent = String(this.totalScore);
  }
  private constructor() {}
  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score();
    }
    return Score.instance;
  }
}

interface Foodable {
  element: HTMLDivElement;
  clickEventHandler(): void;
}

class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    // イベントリスナーの中でthisを使用する場合の制御
    element.addEventListener('click', this.clickEventHandler.bind(this));
  }
  clickEventHandler() {
    this.element.classList.toggle('food--active');
    const score = Score.getInstance();
    score.render();
  }
}

interface Foodsable {
  elements: NodeListOf<HTMLDivElement>;
  readonly activeElements: HTMLDivElement[];
  readonly activeElementsScore: number[];
}

class Foods implements Foodsable {
  // シングルトンパターン
  private static instance: Foods;
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

  private constructor() {
    this.elements.forEach(element => {
      new Food(element);
    })
  }
  static getInstance() {
    if (!Foods.instance) {
      Foods.instance = new Foods();
    }
    return Foods.instance;
  }
}
const foods = Foods.getInstance();
