import mongoose from "mongoose";
import {BaseDao} from "./baseDao.js";
import {CarritosModel} from '../models/cartMongoDao.js';


export class CarritoService extends BaseDao{
    
    ID_FIELD = "_id";

    static getInstance() {
        return new CarritoService();
    }

    constructor() {
        if(typeof CarritoService.instance === 'object') {
            return CarritoService.instance;
        }
        super();
        CarritoService.instance = this;
        return this;
    }

    async existsCart(id){
        try {
            const result = await CarritosModel.findOne({_id:id});
            return result
        } catch (error) {
            console.log('Hubo un error al crear el carrito',error)
        }
    }
    async createCart(){
        try {
            return await CarritosModel.create({});
        } catch (error) {
            console.log('Hubo un error al crear el carrito',error)
        }
    }
    async deleteCart(id){
        try {
            const result = await CarritosModel.deleteOne({_id:id});
            if(result.deletedCount == 0){
                return null
            }else {
                return result
            }
        } catch (error) {
            console.log('Hubo un error al mostrar la base de datos',error)
        }
    }
    async addToCart(id,obj){
        try {
            const res = await this.existsCart(id)
            const newId = obj._id.toString()
            if(res !== null){
                let exists1 = await CarritosModel.findOne({_id:id,"products._id":obj._id})
                if(exists1 !== null ){
                    let locate = exists1.products.find(i => i._id == newId)
                    locate.qty++;
                    const res = await CarritosModel.updateOne({_id:id,"products._id":obj._id},{$set:{"products.$":locate}});
                    return res
                } else {
                    const res = await CarritosModel.updateOne({_id:id},{$push:{products:obj}});
                    let exists2 = await CarritosModel.findOne({_id:id,"products._id":obj._id})
                    let locate = exists2.products.find(i => i._id == newId);
                    locate.qty = 1;
                    const final = await CarritosModel.updateOne({_id:id,"products._id":obj._id},{$set:{"products.$":locate}});
                    return final
                }
            }else{
                return null
            }
        } catch (error) {
            console.log('Hubo un error al guardar el producto seleccionado',error)
        }
    }
    async getById(id){
        try {
            return await CarritosModel.findById(id).populate('products').select({products: 1, _id:0});
        } catch (error) {
            console.log('Hubo un error al actualizar el producto seleccionado',error)
        }
    }
    async deleteById(id,id_prod){
        try {
            let exists = await CarritosModel.findById({_id:id,"products._id":mongoose.Types.ObjectId(id_prod)})
            if (exists){
                let res = await CarritosModel.updateOne({_id:id},{$pull : { products : { _id : mongoose.Types.ObjectId(id_prod)}}})
                return res
            } else {
                return null
            }
        } catch (error) {
            console.log('Hubo un error al borrar el articulo seleccionado',error)
        }
    }
    async getAllcarts(){
        try {
            return await CarritosModel.find({});
        } catch (error) {
            console.log('Hubo un error al buscar los carritos',error)
        }
    }
}