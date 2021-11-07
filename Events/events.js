// const { EventEmitter } = require("events")

// const ev = new EventEmitter();

// Executará sempre que o evento for emitido
// ev.on('saySomething', (message)=>{
//     console.log('Eu ouvi você '+ message)
// });

//Apenas executará uma vez
// ev.once('saySomething', (message)=>{
//     console.log('Eu ouvi você '+ message)
// });

// ev.emit('saySomething', 'Maik');
// ev.emit('saySomething', 'Maik');


//Herdando do EventEmitter

const {inherits} = require('util');
const { EventEmitter } = require("events");

function Character(name){
    this.name = name;
}

inherits(Character, EventEmitter);

const chapolin = new Character('Chapolin');
chapolin.on('Help',() => console.log(`Eu! o ${chapolin.name} coloradoo!`));

console.log("Oh! E agora, quem poderá me defender?");
chapolin.emit('Help');
