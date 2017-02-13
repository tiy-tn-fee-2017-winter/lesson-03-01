export default function average(arr) {
  const length = arr.length;

  let sum = 0;

  // let i = 0;
  // while (i < length) {
  //   // sum = arr[i] + sum;
  //   sum += arr[i];
  //
  //   // i = i + 1;
  //   // i ++;
  //   i += 1;
  // }

  for (let i = 0; i < length; i += 1) {
    sum += arr[i];
  }

  return sum / length;
}
