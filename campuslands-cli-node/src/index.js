import { agregarCamper, listarCampers, buscarCamperPorNombre } from './campers.js';

const [ , , comando, arg1, arg2] = process.argv;

try {
    switch (comando) {
        case 'agregar':
            const c = await agregarCamper(arg1, arg2);
            console.log('✔ Camper registrado:', c);
            break;

        case 'listar':
            const lista = await listarCampers();
            if (lista.length === 0) {
                console.log(' No hay campers aún.');
            } else {
                console.table(lista);
            }
            break;

        case 'buscar':
            const encontrados = await buscarCamperPorNombre(arg1);
            if (encontrados.length === 0) {
                console.log('No se encontraron resultados.');
            } else {
                console.table(encontrados);
            }
            break;

        default:
            console.log('Uso: node src/index.js [listar | agregar | buscar]');
    }
} catch (err) {
    console.error('Error:', err.message);
}