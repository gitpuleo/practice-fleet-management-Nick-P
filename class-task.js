class Vehicle{
    constructor(type, make, model, year, mileage=0){
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;

    }

}


let tundra = new Vehicle(truck, "Toyota", "Tundra", 2007, 237000);

let harley = new Vehicle(motorcycle, "Harley Davidson", "Big orange one", 2021, 15000);

let wrxsti = new Vehicle(rallyCar, "Subaru", "Impreza", 2003, 318000);

