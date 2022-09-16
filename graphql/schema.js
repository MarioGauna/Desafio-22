import {buildSchema} from "graphql";
import {productType} from "./types/productoType.js";
import {productNew} from "./inputs/productNew.js";
import {productUpdate} from "./inputs/productpdate.js";
import {productAll} from "./queries/productAll.js";
import {productById} from "./queries/productById.js";
import {productAdd} from "./mutations/productAdd.js";
import {productUpdateById} from "./mutations/productUpdate.js";
import {productDelete} from "./mutations/productdelete.js";

export const schema = buildSchema(`
    ${productType}
    ${productNew}
    ${productUpdate}
    type Query{
        ${productAll}
        ${productById}
    }

    type Mutation{
        ${productAdd}
        ${productUpdateById}
        ${productDelete}
    }
`)