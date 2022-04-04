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

class Locomotive {
    constructor() {
        
    }
}

const myWagon = new FreightWagon(150, 'covered');

myWagon.loadCargo('bag1', 'bag2', 'bag3');

console.log(myWagon);