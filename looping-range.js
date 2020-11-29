function range(start, end, step) {
  //check if arguments are valid
  let solution = []
  if (Number.isInteger(start) && Number.isInteger(end) && Number.isInteger(step) && start <= end && step > 0) {
    let addition = start
    while (addition <= end) {
      solution.push(addition);
      addition += step
    }
  } return solution
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));