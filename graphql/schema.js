import {buildSchema} from "graphql";
import {ProductType} from "./types/productoType.js";
import {ProductoNewInput} from "./inputs/productNew.js";
import {ProductoUpdateInput} from "./inputs/productpdate.js";
import {GetAllProductosQuery} from "./queries/productAll.js";
import {GetProductByIdQuery} from "./queries/productById.js";
import {CreateProductoMutation} from "./mutations/productAdd.js";
import {UpdateProductByIdMutation} from "./mutations/productUpdate.js";
import {DeleteProductByIdMutation} from "./mutations/productdelete.js";

export const schema = buildSchema(`
    ${ProductType}
    ${ProductoNewInput}
    ${ProductoUpdateInput}
    
    type Query{
        ${GetAllProductosQuery}
        ${GetProductByIdQuery}
    }

    type Mutation{
        ${CreateProductoMutation}
        ${UpdateProductByIdMutation}
        ${DeleteProductByIdMutation}
    }
`);