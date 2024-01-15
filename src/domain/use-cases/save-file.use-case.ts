import fs from 'fs'

export interface SaveFileUseCase {  //caso de uso para crear el archivo
    execute: (options: Options) => boolean;
}

export interface Options {  //opciones para crear el fichero a guardar
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(

    ) { }
    execute({
        fileContent,
        fileDestination = 'outputs',
        fileName = 'table'
    }: Options): boolean {
        try {
            fs.mkdirSync(fileDestination, { recursive: true })
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}
