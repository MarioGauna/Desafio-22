
import {ProductoService} from '../services/classMongoProductos.js';
import chai from 'chai';
import request from 'supertest';
const assert = chai.assert;
const expect = chai.expect;

// TEST MOCHA CHAI

describe("Test de productos", () => {
  let instancia;

  const newProducto={
        title:"Sillas",
        description:"Descripcion de producto",
        image:"foto.jpg",
        stock:100,
        price:1700
  }

  describe("Test funciones de productos",() => {
    it("Listar productos", async () => {
        instancia = new ProductoService();
        const producto = await instancia.getAll();
        expect(producto).to.have.lengthOf(5);
    });

    it("Obtener producto", async () => {
        instancia = new ProductoService();
        const producto = await instancia.getById('62b15e886d0a6ef766e4b18a');
        assert.hasAnyKeys(producto,['title','description','image','stock','price','timestamp']);
    });

    it("Agregar producto", async () => {
          instancia = new ProductoService();
          const producto = await instancia.create(newProducto);
          assert.typeOf(producto,'object')
    });
  });
});

// TEST SUPERTEST

// describe("Test rutas", () => {
//   const newProducto={
//     title:"Bancos",
//     description:"Descripcion de producto",
//     image:"foto.jpg",
//     stock:100,
//     price:1700
// }
//   const api = request('http://localhost:8080');
  
//   describe("Listado completo", () => {
//     it("status 200", async () => {
//       const respuesta = await api.get('/api/productos');
//       expect(respuesta.status).to.eql(200);
//     });

//     it("Agregar producto", async () => {
//       const respuesta = await api.post('/api/productos').send(newProducto);
//       expect(respuesta.status).to.eql(200);
//       const prod=respuesta.body;
//       assert.typeOf(prod,'object')
//     });
//   });
// });