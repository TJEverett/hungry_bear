export class Bear {
  constructor(name, level) {
    // level is 1 (easy), 2 (normal), or 3 (hard) exceptions are built as level 2.
    this.name = name;
    this.difficulty = level;
    this.interval = 0;
    this.food = 10;
    this.sleep = 10;
    this.mood = 100;
    this.intervalSet();
  }

  intervalSet() {
    if (this.difficulty === 1) {
      this.interval = 3000;
    }else if (this.difficulty === 3) {
      this.interval = 1000;
    }else {
      this.interval = 2000;
    }
  }

  hunger() {
    setInterval(() => {
      this.food -= 1;
      if(this.food < 0) {
        this.food = 0;
      }
    }, this.interval);
  }

  tired() {
    setInterval(() => {
      this.sleep -= 1;
      if (this.sleep < 0){
        this.sleep = 0;
      }
    }, this.interval);
  }
}