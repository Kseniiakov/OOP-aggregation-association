"use strict";

// грузовой вагон
class FreightWagon {
    constructor(volume, wagonType) {
        this.volume = {
            value: volume,
            unit: 'm3'
        };
        this.wagonType = wagonType;
        this.cargo;
    };
    unloadCargo() {
        this.cargo = null;
    };

    loadCargo(...myCargo) {
        this.cargo = myCargo;
    };
};
// локомотив
class Locomotive {
    constructor(maxSeats, engineType, enginePower) {
        this.maxSeats = maxSeats;
        this.arrayPeople = [];
        this.engineType = engineType;
        this.enginePower = enginePower;
        this.isTheEngineRunning = false;
    };
    engineStart() {
        if(this.arrayPeople.length !== 0) {
            this.isTheEngineRunning = true;
        } else {
            console.log('Starting the engine is not possible until there is at least 1 passenger.');
        };
    };
    putAPassengerOn(passenger) {
        if(this.arrayPeople.length < this.maxSeats) {
            this.arrayPeople.push(passenger);
        } else {
            console.log('The maximum number of passengers has been reached.');
        };
    };
};

const myWagon = new FreightWagon(150, 'covered');
myWagon.loadCargo('bag1', 'bag2', 'bag3');

const myLocomotive = new Locomotive(3, '2TЭ116', '2x3060 l.from.');
myLocomotive.putAPassengerOn('John');
myLocomotive.putAPassengerOn('Bill');
myLocomotive.putAPassengerOn('Teddy');

myLocomotive.engineStart();

console.log(myLocomotive);