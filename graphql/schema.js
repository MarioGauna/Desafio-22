const msj="carrito borrado"

export const typeDef= `
type Query {
    getAllProducts: [Producto]
    getProductById(_id:ID!): Producto
    getAllCarts:[Carrito]
    getCartById(_id:ID!): Carrito
}
type Mutation {
    addProduct(data: ProductoNewInput): Producto
    deleteProduct(_id:ID!): Producto
    updateProduct(_id:ID!, data: ProductoUpdateInput): Producto
    createCart: Carrito
    deleteCart(_id:ID!): Carrito
}
type Producto {
    _id: ID
    title: String
    description: String
    price: Float
    image: String
    stock: Int
    timestamp: String
}
type Carrito {
    _id: ID
    products:[Producto]
    timestamp: String
}
input ProductoNewInput {
    title: String
    description: String
    price: Float
    image: String
    stock: Int
}
input ProductoUpdateInput {
    title: String
    description: String
    price: Float
    image: String
    stock: Int
}
`;