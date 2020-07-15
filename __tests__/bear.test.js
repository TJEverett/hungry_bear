import { Bear } from './../src/bear.js';

describe('Construct Bear', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new Bear("fuzzy", 1);
  });

  afterEach(function() {
    jest.clearAllTimers();
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
});