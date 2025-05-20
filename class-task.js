class Vehicle{
    constructor(type, make, model, year, mileage=0){
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;

    }
    getDetails(){
        return `This ${this.type} is a ${this.year} ${this.make} "${this.model}" with ${this.mileage} miles.`;
    }
    mileageDriven(distance){
        this.mileage = this.mileage + distance;
    }
}


let tundra = new Vehicle("truck", "Toyota", "Tundra", 2007, 237000);

let harley = new Vehicle("motorcycle", "Harley Davidson", "Big orange one", 2021, 15000);

let wrxsti = new Vehicle("rally car", "Subaru", "Impreza", 2003, 318000);


console.log("Vehicle Report:\n");

harley.mileageDriven(2300);
console.log(harley.getDetails());

tundra.mileageDriven(42);
console.log(tundra.getDetails());

wrxsti.mileageDriven(77000);
console.log(wrxsti.getDetails());

