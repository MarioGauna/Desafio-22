import { ProductoService } from "../services/classMongoProductos.js";
import { CarritoService } from "../services/classMongoCarrito.js"

const newProduct = new ProductoService();
const newCart = new CarritoService();

export const resolvers={
Query:{
    getAllProducts:()=>{
        return newProduct.getAll();
    },
    getProductById:async (_,{_id})=>{
        return newProduct.getById(_id);
    },
    getAllCarts:()=>{
        return newCart.getAllcarts();
    },
    getCartById:async (_,{_id})=>{
        return newCart.getById(_id);
    },
},
Mutation:{
    addProduct: async (_,{ data })=>{
        return newProduct.create(data);
    },
    updateProduct: async (_,{ _id,data })=>{
        return newProduct.updateById(_id,data);
    },
    deleteProduct: async (_,{ _id })=>{
        return newProduct.deleteById(_id);
    },
    createCart: ()=>{
        return newCart.createCart();
    },
    deleteCart: async (_,{_id})=>{
        return newCart.deleteCart(_id);
    },
},
};