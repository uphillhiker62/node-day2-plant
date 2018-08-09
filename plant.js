const EventEmitter = require('events');

class Plant extends EventEmitter {

    constructor() {
        super();
        this.size = 0;
        this.hasBeenPlanted = false;
        this.once('plantSeed', this.plantSeed);
        this.on('water', this.water);
        this.on('bugAttack', this.bugAttack);
        this.on('harvest', this.harvest);
        this.on('error', this.error);
    }

    plantSeed() {
        this.size = 1;
        this.hasBeenPlanted = true;
        console.log(`Planted seed. The seed is size: ${this.size}`);
    }

    water() {
        if (this.hasBeenPlanted === true) {
            this.size++;
            console.log(`Seed was watered. The seed is size: ${this.size}`);
        } else {
            console.log('Seed has not been planted.');
        }
    }

    bugAttack() {
        if (this.hasBeenPlanted === true) {
            this.size--;
            console.log(`Bug attack. The seed is size: ${this.size}`);
        } else {
            console.log('Seed has not been planted.');
        }
    }

    harvest() {
        if (!this.hasBeenPlanted) {
            console.log("You tried to harvest a plant, but seed has not been planted");
        } else {
            console.log(`Plant harvested. Pant size is: ${this.size}`);
            this.removeAllListeners();
        }
    }

    error(err) {
        console.log(`Error: ${err.message}`);
    }
}

let myPlant = new Plant();

myPlant.emit('harvest');
myPlant.emit('bugAttack');
myPlant.emit('plantSeed');
myPlant.emit('water');
myPlant.emit('bugAttack');
myPlant.emit('error', new Error('whoops!'));
myPlant.emit('water');
myPlant.emit('water');
myPlant.emit('water');
myPlant.emit('plantSeed');
myPlant.emit('harvest');
myPlant.emit('water');
myPlant.emit('bugAttack');
myPlant.emit('bugAttack');