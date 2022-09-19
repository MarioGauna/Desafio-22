import { BaseDao } from "./baseDao.js";
import { ProductosModel } from "../models/productsMongoDao.js";

export class ProductoService extends BaseDao{
    
    ID_FIELD = "_id";

    static getInstance() {
        return new ProductoService();
    }

    constructor() {
        if(typeof ProductoService.instance === 'object') {
            return ProductoService.instance;
        }
        super();
        ProductoService.instance = this;
        return this;
    }

    static async existe(id){
        try {
            const result =await ProductosModel.findById(id);
            console.log(result)
            return result
        } catch (error) {
            console.log('Hubo un error al guardar el articulo',error)
        }
    }
    async create(obj){
        try {
            const result = await ProductosModel.create(obj);
            return result
        } catch (error) {
            console.log('Hubo un error al guardar el articulo',error)
        }
    }
    async getAll(){
        try {
            const result = await ProductosModel.find()
            return result
        } catch (error) {
            console.log('Hubo un error al mostrar la base de datos',error)
        }
    }
    async getById(id){
        try {
            const result = await ProductosModel.findOne({_id:id});
            return result
        } catch (error) {
            console.log('Hubo un error al obtener el producto seleccionado',error)
        }
    }
    async updateById(id,obj){
        try {
            const result = await ProductosModel.findByIdAndUpdate({_id:id},obj);
            return result
        } catch (error) {
            console.log('Hubo un error al actualizar el producto seleccionado',error)
        }
    }
    async deleteById(id){
        try {
            const result = await ProductosModel.deleteOne({_id:id});
            if(result.deletedCount == 0){
                return null
            }else {
                return result
            }
        } catch (error) {
            console.log('Hubo un error al borrar el articulo seleccionado',error)
        }
    }
}
