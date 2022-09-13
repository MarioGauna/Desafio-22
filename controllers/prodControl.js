import {ProductoService} from "../services/classMongoProductos.js";

const productoService = ProductoService.getInstance();

export async function getAll(req, res) {
    const result = await productoService.getAll();
    result
    ? res.status(200).json({"success" : "Listado de productos",result})
    : res.status(400).json({"error": "Falla de la base de datos"})
}

export async function getById(req, res) {
    const {id} = req.params;
    const result = await productoService.getById(id);
    result 
    ? res.status(200).json({"success" : "Producto Encontrado",result})
    : res.status(400).json({"error": "ID Inexistente"})
}

export async function create(req, res) {
    const newProd = req.body;
    const propiedades = ["title","description","image","price","stock"];
    const all = propiedades.every(prop => newProd.hasOwnProperty(prop));
    if (all){
        const result = await productoService.create(newProd);
        res.status(200).json({"success" : "Producto Creado con ID "+result._id})
    } else {
        res.status(400).json({"error": "Debe llenar las propiedades nombre, descripcion, foto, precio y stock"})
    }
}

export async function update(req, res) {
    const { id } = req.params;
    const body = req.body;
    const propiedades = ["title","description","image","price","stock"];
    const all = propiedades.every(prop => body.hasOwnProperty(prop));
    if (all){
        const result = await productoService.updateById(id, body);
        result 
        ? res.status(200).json({"success" : "Producto Actualizado"})
        : res.status(400).json({"error": "ID no encontrado"})
    } else {
        res.status(400).json({"error": "Debe actualizar todas las propiedades nombre, descripcion, foto, precio y stock"})
    }
}

export async function remove(req, res) {
    const {id} = req.params;
    const result = await productoService.deleteById(id);
    result 
    ? res.status(200).json({"success" : "Producto Borrado",result})
    : res.status(400).json({"error": "ID no encontrado"})
}