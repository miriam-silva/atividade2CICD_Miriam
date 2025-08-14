const multiplica = require('../src/index');

test('multiplica 3 * 4 para igualar 12', () => {
  expect(multiplica(3, 4)).toBe(12);
});
