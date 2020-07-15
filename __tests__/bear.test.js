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