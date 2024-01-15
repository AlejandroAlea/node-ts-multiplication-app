export interface CreateTableUseCase { //reglas de negocio a forzar la class que implementa
    execute: (options: CreateTableOptions) => string  //metodo execut y lo que va a devoler

}

export interface CreateTableOptions {   //creo la interface que devuelve el caso de uso
    base: number;
    limit?: number;
    name?: string;
    destination?: string;
}


export class CreateTable implements CreateTableUseCase {  // relacionar la tabla con el caso de uso(CreateTableUseCase)

    constructor(


    ) { }

    execute({ base, limit = 10, name = 'multiplication-table', destination = 'outputs' }: CreateTableOptions) { //ejecutar el caso de uso con sus parametros

        let outputMessage = ''
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} * ${i} = ${base * i}\n`

        }
        return outputMessage
    }

}