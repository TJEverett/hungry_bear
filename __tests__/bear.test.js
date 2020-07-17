import { Bear } from './../src/bear.js';

describe('Construct Bear', () => {
  let fuzzy;

  beforeEach(function() {
    fuzzy = new Bear("fuzzy", 1);
  });

  test('should have a name and difficulty level of 1 when it is created', () => {
    expect(fuzzy.name).toEqual("fuzzy");
    expect(fuzzy.difficulty).toEqual(1);
  });

  test('should have 10 food and sleep values and 100 mood when first created', () => {
    expect(fuzzy.food).toEqual(10);
    expect(fuzzy.sleep).toEqual(10);
    expect(fuzzy.mood).toEqual(100);
  });

  test('should set interval property to 3000 on difficulty 1', () => {
    expect(fuzzy.interval).toEqual(3000);
  });

  test('should set interval property to 2000 on difficulty 2', () => {
    fuzzy = new Bear("fuzzy", 2);
    expect(fuzzy.interval).toEqual(2000);
  });

  test('should set interval property to 1000 on difficulty 3', () => {
    fuzzy = new Bear("fuzzy", 3);
    expect(fuzzy.interval).toEqual(1000);
  });
});

describe('Decrementing Food, Sleep, and Mood', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new Bear("fuzzy", 3);
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('check for correct food level loss', () => {
    fuzzy.hunger();
    jest.advanceTimersByTime(3500);
    expect(fuzzy.food).toEqual(7);
  });

  test('check that food does not fall bellow 0', () => {
    fuzzy.hunger();
    jest.advanceTimersByTime(12500);
    expect(fuzzy.food).toEqual(0);
  });

  test('check for correct sleep level loss', () => {
    fuzzy.tired();
    jest.advanceTimersByTime(3500);
    expect(fuzzy.sleep).toEqual(7);
  });

  test('check that sleep does not fall bellow 0', () => {
    fuzzy.tired();
    jest.advanceTimersByTime(12500);
    expect(fuzzy.sleep).toEqual(0);
  });

  test('check the 3 states of how food effects mood', () => {
    fuzzy.food = 10;
    expect(fuzzy.foodCheckMood()).toEqual(1);
    fuzzy.food = 4;
    expect(fuzzy.foodCheckMood()).toEqual(-1);
    fuzzy.food = 0;
    expect(fuzzy.foodCheckMood()).toEqual(-10);
  });

  test('check the 3 states of how sleep effects mood', () => {
    fuzzy.sleep = 10;
    expect(fuzzy.sleepCheckMood()).toEqual(1);
    fuzzy.sleep = 4;
    expect(fuzzy.sleepCheckMood()).toEqual(-1);
    fuzzy.sleep = 0;
    expect(fuzzy.sleepCheckMood()).toEqual(-10);
  });

  test('check that prototype to modify mood based on food and sleep works', () => {
    fuzzy.mood = 50;
    fuzzy.food = 3;
    fuzzy.sleep = 3;
    fuzzy.modifyMood();
    jest.advanceTimersByTime(7500);
    expect(fuzzy.mood).toEqual(29);
  });

  test('check that mood does not go above 100', () => {
    fuzzy.mood = 99;
    fuzzy.modifyMood();
    jest.advanceTimersByTime(7500);
    expect(fuzzy.mood).toEqual(100);
  });

  test('check that mood does not go bellow 0', () => {
    fuzzy.mood = 17;
    fuzzy.food = 0;
    fuzzy.sleep = 0;
    fuzzy.modifyMood();
    jest.advanceTimersByTime(7500);
    expect(fuzzy.mood).toEqual(0);
  });
});

describe('Increasing Food and Sleep', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new Bear("fuzzy", 3);
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a property of cooldown with a default value of false', () => {
    expect(fuzzy.cooldown).toEqual(false);
  });

  test('check that when adding food cooldown is set to true, then switches to false after 250 milliseconds', () => {
    fuzzy.feed();
    expect(fuzzy.cooldown).toEqual(true);
    jest.advanceTimersByTime(251);
    expect(fuzzy.cooldown).toEqual(false);
  });

  test('check that when adding food it goes up by 2', () => {
    fuzzy.food = 5;
    fuzzy.feed();
    expect(fuzzy.food).toEqual(7);
  });

  test('check that when adding food the level does not go higher than 10', () => {
    fuzzy.food = 9;
    fuzzy.feed();
    expect(fuzzy.food).toEqual(10);
  });

  test('check that you can not add food while cooldown is true', () => {
    fuzzy.food = 5;
    fuzzy.feed();
    fuzzy.feed();
    fuzzy.feed();
    expect(fuzzy.food).toEqual(7);
  });

  test('check that when adding sleep cooldown is set to true, then switches to false after 250 milliseconds', () => {
    fuzzy.rest();
    expect(fuzzy.cooldown).toEqual(true);
    jest.advanceTimersByTime(251);
    expect(fuzzy.cooldown).toEqual(false);
  });

  test('check that when adding sleep it goes up by 2', () => {
    fuzzy.sleep = 5;
    fuzzy.rest();
    expect(fuzzy.sleep).toEqual(7);
  });

  test('check that when adding sleep the level does not go higher than 10', () => {
    fuzzy.sleep = 9;
    fuzzy.rest();
    expect(fuzzy.sleep).toEqual(10);
  });

  test('check that you can not add sleep while cooldown is true', () => {
    fuzzy.sleep = 5;
    fuzzy.rest();
    fuzzy.rest();
    fuzzy.rest();
    expect(fuzzy.sleep).toEqual(7);
  });
});