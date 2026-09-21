import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { agregarCamper } from './campers.js';

const rl = readline.createInterfaces({ input, output});

try {
    console.log('============REGISTRO INTERACTIVO DE CAMPERS ESM)=====');
    const nombre = await rl.question('¿nombre del camper');
    const stack = await rl.question('¿stack tecnologico');

    const guardado = await rl.question(nombre, stack);
    console.log('registrado en JSON', guardado);
}finally{
rl.close();
}

