import "../config/configDB.js";

export class BaseDao {

    constructor() {
        if (this.constructor === BaseDao) {
            throw new Error('Clase "BaseDao" no puede se instanciada')
        }
    }

    create() {
        throw new Error('Metodo create no se puede implementar')
    }

    getAll() {
        throw new Error('Metodo getAll no se puede implementar')
    }

    deleteById() {
        throw new Error('Metodo deleteById no se puede implementar')
    }
}