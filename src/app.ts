
import { yarg } from "./config/config/args.plugins";
import { ServerApp } from "./presentation/server-app";


// console.log(process.argv);

// console.log(argv)
// console.log('viendo los argumentos:',argv.b)

(async () => {
    await main();
})();



async function main() {

    const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg

    ServerApp.run({ base, limit, showTable, fileName, fileDestination })
}