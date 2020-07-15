export class Bear {
  constructor(name, level){
    // level is 1 (easy), 2 (normal), or 3 (hard) exceptions are built as level 2.
    this.name = name;
    this.difficulty = level;
    this.interval = 0;
    this.food = 10;
    this.sleep = 10;
    this.mood = 100;
    this.setInterval();
  }

  setInterval() {
    if(this.difficulty === 1) {
      this.interval = 3000;
    }else if (this.difficulty === 3) {
      this.interval = 1000;
    }else {
      this.interval = 2000;
    }
  }
}