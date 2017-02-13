/**
 * The function should take three arguments
 * The function should return result of numbers after applying the chosen operation.
 * @param  {string} operation
 * @param  {number} value1
 * @param  {number} value2
 * @return {number} result of calculation
 */
export default function (operation, value1, value2) {
  if (operation === 'add') {
    return value1 + value2;
  }

  if (operation === 'subtract') {
    return value1 - value2;
  }

  if (operation === 'divide') {
    return value1 / value2;
  }

  return value1 * value2;
}
