import fs from 'fs'
import { yarg } from './config/config/args.plugins';



const { b: base, l: limit, s: showTable } = yarg



//grabar en el archivo de salida
//path: outputs/tabla-5.txt

let outputMessage = '';
const headerMessage = `
===========================
     tabla del ${base}
===========================\n
`

for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} * ${i} = ${base * i}\n`
}

outputMessage = headerMessage + outputMessage
if (showTable) {
    console.log(outputMessage)
}
const outPath = 'output';

fs.mkdirSync(outPath, { recursive: true });
fs.writeFileSync(`${outPath}/tabla-${base}.txt`, outputMessage)
console.log('File created')