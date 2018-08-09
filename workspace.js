const EventEmitter = require('events');

class Person extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.on('speak', this.speakListener);
        this.once('born', this.bornListener);
    }
    speakListener(said) {
        console.log(`${this.name}: ${said}`);
    }
    bornListener() {
        console.log('Hello World! I have arrived!');
    }
}

let ben = new Person('Benjamin Franklin');
let jon = new Person('Johnny Knoxville');
ben.emit('born');
jon.emit('speak', 'that hurt!');
ben.emit('speak', 'You may delay, but time will not.');
