// Your task is to create a function - calculate().

/**
 * The function should take three arguments
 * The function should return result of numbers after applying the chosen operation.
 * @param  {string} operation
 * @param  {number} value1
 * @param  {number} value2
 * @return {number} result of calculation
 */

import calculate from '../app/calculate';

module('Calculate', () => {
  test('it can add numbers', (assert) => {
    assert.strictEqual(calculate('add', 1, 1), 2, 'It should be able to add 1 and 1');
    assert.strictEqual(calculate('add', 1, 5), 6, 'It should be able to add 1 and 5');
    assert.strictEqual(calculate('add', 5, 5), 10, 'It should be able to add 5 and 5');
    assert.strictEqual(calculate('add', 10000, 200), 10200, 'It should be able to add 10000 and 200');
  });

  test('it can subtract numbers', (assert) => {
    assert.strictEqual(calculate('subtract', 2, 1), 1, 'It should be able to subtract 2 and 1');
    assert.strictEqual(calculate('subtract', 1, 1), 0, 'It should be able to subtract 1 and 1');
    assert.strictEqual(calculate('subtract', 10, 5), 5, 'It should be able to subtract 5 and 5');
    assert.strictEqual(calculate('subtract', 10000, 200), 9800, 'It should be able to subtract 10000 and 200');
  });

  test('it can multiply numbers', (assert) => {
    assert.strictEqual(calculate('multiply', 2, 2), 4, 'It should be able to multiply 2 and 1');
    assert.strictEqual(calculate('multiply', 10, 5), 50, 'It should be able to multiply 5 and 5');
    assert.strictEqual(calculate('multiply', 300, 20), 6000, 'It should be able to multiply 1 and 1');
    assert.strictEqual(calculate('multiply', 200, 200), 40000, 'It should be able to multiply 10000 and 200');
  });
});
