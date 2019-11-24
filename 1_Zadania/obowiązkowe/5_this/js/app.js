//zadanie 0

const car = {
    brand: "Ford",
    color: "Red",
    numberOfKilometers: 0,

    printCarInfo : function() {
        console.log(this.color + " " + this.brand + ", " + this.numberOfKilometers + "km");
        return this.color + " " + this.brand + ", " + this.numberOfKilometers + "km";
    },

    drive : function(km) {
        this.numberOfKilometers += km;
    }
}

car.printCarInfo(0);
car.drive(10);
car.printCarInfo();

//zadanie 1

car.services = ["2019", "2020"];

car.addService = function(year){
    this.services.push(year);
}

car.showServices = function(){
   return this.services;
}

car.addService(2021);
car.showServices();

//zadanie 3

const stairs = {
    step: 0,

    up: function(){
        this.step++;
    },

    down: function(){
        this.step--;
    },

    printStep: function(){
        console.log(this.step);
    }

}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();