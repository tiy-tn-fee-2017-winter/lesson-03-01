import average from '../app/average';

module('Average', () => {
  test('average for simple numbers', (assert) => {
    assert.strictEqual(average([1]), 1, 'Average of a single number');
    assert.strictEqual(average([5]), 5, 'Average of a single number');
    assert.strictEqual(average([2, 4]), 3, 'Average of two numbers');
    assert.strictEqual(average([2, 4, 6]), 4, 'Average of two numbers');

    assert.strictEqual(average([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Average of a bunch of numbers');
  });
});
