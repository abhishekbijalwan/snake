export function generate2dMatrix(rows = 3, columns = 3) {
  const arr = [];
  let value = 0;
  // creating two-dimensional array
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < columns; j++) {
      arr[i][j] = {value: value++, head: false, tail: false, body: false, fruit: false};
    }
  }

  return arr;
}
