function carPassing (cars, speed) {
  const carSpeed = {
    time: Date.now(),
    "speed": speed
  }
  cars.push(carSpeed)
  return cars
}


console.log(carPassing([], 50))