import yargs, { options } from 'yargs'



export const yarg = yargs(process.argv)
    .option('b', { //b es la base 10
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', { //b es la base 10
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table base'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'show multiplication table'
    })

    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name'
    })

    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })



    .check((argv, options) => {
        // console.log(argv, options)
        if (argv.b < 1) throw 'error : base must be greater than 0'


        return true
    })
    .parseSync()


