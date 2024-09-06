const operacoes = require('./operacoes');


test('adds 1 + 2 to equal 3', () => {
  expect(operacoes.soma(1, 2)).toBe(3);
});


test('subtracts 4 - 2 to equal 2', () => {
  expect(operacoes.subtracao(4, 2)).toBe(2);
});