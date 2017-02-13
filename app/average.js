import sum from './sum';

export default function average(arr) {
  const length = arr.length;

  return sum(arr) / length;
}
