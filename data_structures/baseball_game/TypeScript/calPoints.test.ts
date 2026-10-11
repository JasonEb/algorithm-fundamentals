import { calPoints } from './calPoints';

describe('calPoints', () => {
  test('example 1', () => {
    expect(calPoints(['5', '2', 'C', 'D', '+'])).toEqual(30);
  });

  test('example 2', () => {
    expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toEqual(27);
  });

  test('example 3', () => {
    expect(calPoints(['1'])).toEqual(1);
  });
});
