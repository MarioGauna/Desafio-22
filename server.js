import express from 'express';
//import routesProd from './routes/routesProd.js';
//import routesCart from './routes/routesCart.js';
//import usuario from './routes/routesUser.js';
import MongoStore from "connect-mongo";
import passport from "passport";
import session from "express-session";
import './passport/local.js';
import {graphqlHTTP} from "express-graphql";
import { typeDef } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import {makeExecutableSchema} from "@graphql-tools/schema";

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.set('views','./views');
app.set('view engine', 'ejs');

app.use(
    session({
        secret:'key',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl:'mongodb+srv://gauna_mario:D8GuMWgPoTICAKPv@cluster0.1vxmmjy.mongodb.net/almacen?retryWrites=true&w=majority'}),
        cookie:{maxAge:60000},
        })
)
app.use(passport.initialize());
app.use(passport.session());

//app.use('/',usuario);
//app.use('/api/productos', routesProd);
//app.use('/api/carrito', routesCart);
/* app.get('*',async(req, res)=>{
    res.status(404).json({"error": "Ruta no habilitada"})
}) */ 

const schema = makeExecutableSchema({
    typeDefs: typeDef,
    resolvers: resolvers,
});

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql: true,
    })
);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=> console.log(`Servidor iniciado en el puerto ${PORT}`));
server.on('error',(error) => console.log(error));