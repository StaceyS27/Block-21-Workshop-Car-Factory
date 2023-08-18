class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription () {
        return  `The make is ${this.make}, the model is ${this.model}, and the year is ${this.year}.`
    }
}

class ElectricCar extends Car {
    constructor (make, model, year, range){
        super (make, model, year);
        this.range = range;
    }

    getDescription () {
        return `${super.getDescription()} Additionally, its range is ${this.range} miles.`
    }
}

const electricCar = new ElectricCar ("Tesla", "Model S", 2019, 300);

console.log(electricCar.getDescription());
