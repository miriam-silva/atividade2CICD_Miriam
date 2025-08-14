const { divisao } = require('../src/index');

test('divisao 10 / 2 para igualar 5', () => {
  expect(divisao(10, 2)).toBe(5);
});