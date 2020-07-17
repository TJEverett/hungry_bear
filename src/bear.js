export class Bear {
  constructor(name, level) {
    // level is 1 (easy), 2 (normal), or 3 (hard) exceptions are built as level 2.
    this.name = name;
    this.difficulty = level;
    this.interval = 0;
    this.food = 10;
    this.sleep = 10;
    this.mood = 100;
    this.cooldown = false;
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

  foodCheckMood() {
    if (this.food > 5) {
      return 1;
    } else if (this.food < 1) {
      return -10
    } else {
      return -1;
    }
  }

  sleepCheckMood() {
    if (this.sleep > 5) {
      return 1;
    } else if (this.sleep < 1) {
      return -10;
    } else {
      return -1;
    }
  }

  modifyMood() {
    setInterval(() => {
      let modifier = -1;
      modifier += this.foodCheckMood();
      modifier += this.sleepCheckMood();

      this.mood += modifier;

      if (this.mood > 100) {
        this.mood = 100;
      } else if (this.mood < 0) {
        this.mood = 0;
      }
    }, this.interval);
  }

  feed() {
    if (this.cooldown === false) {
      this.food += 2;
      this.cooldown = true;
      setTimeout(() => {
        this.cooldown = false;
      }, 250);
      if (this.food > 10) {
        this.food = 10;
      }
    }
  }

  rest() {
    if (this.cooldown === false) {
      this.sleep += 2;
      this.cooldown = true;
      setTimeout(() => {
        this.cooldown = false;
      }, 250);
      if (this.sleep > 10) {
        this.sleep = 10;
      }
    }
  }

}