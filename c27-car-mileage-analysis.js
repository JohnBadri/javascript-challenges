function calcCar(carArr) {
  let min = Infinity;
  let max = 0;
  let minCar;
  let maxCar;
  const average =
    carArr.reduce((total, car) => total + car.mileage, 0) / carArr.length;

  const totalMilage = carArr.reduce((total, car) => total + car.mileage, 0);

  carArr.forEach((element) => {
    if (min > element.mileage) {
      min = element.mileage;

      minCar = `${element.make} ${element.model} has the lowest mileage of ${element.mileage}`;
    }
    if (max < element.mileage) {
      max = element.mileage;
      maxCar = `${element.make} ${element.model} has the highest mileage of ${element.mileage}`;
    }
  });

  return `Average mileage is ${average}\nTotal mileage is ${totalMilage}\n${minCar}\n${maxCar}`;
}

console.log(
  calcCar([
    { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
    { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
    { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
    { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
    { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
  ])
);
