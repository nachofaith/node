import { platform, release, arch, uptime } from 'node:os';

console.log('Informacion del sistema operativo: ');
console.log('----------------------------------');
console.log('Nombre del sistema operativo: ', platform());
console.log('Version del sistema operativo: ', release());
console.log('Arquitectura: ', arch());
//console.log('CPUs: ', os.cpus());
console.log('Uptime: ', uptime() / 60 / 60);

