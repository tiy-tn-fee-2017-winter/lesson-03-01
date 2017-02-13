export default function average(arr) {
  const length = arr.length;

  let i = 0;
  let sum = 0;

  while (i < length) {
    // sum = arr[i] + sum;
    sum += arr[i];

    // i = i + 1;
    // i ++;
    i += 1;
  }

  return sum / length;
}
