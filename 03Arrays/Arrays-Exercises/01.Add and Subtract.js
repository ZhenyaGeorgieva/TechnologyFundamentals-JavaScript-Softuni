function solve(input) {
  let sumFirst = 0;
  let sumModified = 0;
  let modified = [];

  for (let index = 0; index < input.length; index++) {
    sumFirst += input[index];
    if (input[index] % 2 == 0) {
      let newToAdd = input[index] + index;
      sumModified += newToAdd;
      modified.push(newToAdd);
    } else {
      let newToAdd = input[index] - index;
      sumModified += newToAdd;
      modified.push(newToAdd);
    }
  }
  console.log(modified);
  console.log(sumFirst);
  console.log(sumModified);
}
solve([-5, 11, 3, 0, 2])