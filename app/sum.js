export default function sum(arr) {
  const length = arr.length;
  let sumValue = 0;

  // let i = 0;
  // while (i < length) {
  //   // sumValue = arr[i] + sumValue;
  //   sumValue += arr[i];
  //
  //   // i = i + 1;
  //   // i ++;
  //   i += 1;
  // }

  for (let i = 0; i < length; i += 1) {
    sumValue += arr[i];
  }

  return sumValue;
}
