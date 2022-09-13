import axios from 'axios';

// Obtener listado completo

const getAll = async() =>{
    await axios.get('http://localhost:8080/api/productos')
    .then((respuesta)=>{
        console.log(respuesta.data)
    }) 
    .catch((error)=>{
        console.log(error)
    })
}

// Agregar producto

const newProducto={
    title:"Pizarra",
	description:"Descripcion de producto",
	image:"foto.jpg",
	stock:100,
	price:1700
}

const create = async(nuevoProducto) =>{
    await axios.post('http://localhost:8080/api/productos',nuevoProducto)
    .then((respuesta)=>{
        console.log(respuesta.data)
    }) 
    .catch((error)=>{
        console.log(error)
    })
}

// Obtener producto por id

const getById = async(id) =>{
    await axios.get(`http://localhost:8080/api/productos/${id}`)
    .then((respuesta)=>{
        console.log(respuesta.data)
    }) 
    .catch((error)=>{
        console.log(error)
    })
}

//Actualizar producto

const updateProducto={
    title:"Borrador",
	description:"Descripcion de producto",
	image:"foto.jpg",
	stock:100,
	price:6000
}

const updateById = async(id,upProducto) =>{
    await axios.put(`http://localhost:8080/api/productos/${id}`,upProducto)
    .then((respuesta)=>{
        console.log(respuesta.data)
    }) 
    .catch((error)=>{
        console.log(error)
    })
}

// Borrar producto

const deleteById = async(id) =>{
    await axios.delete(`http://localhost:8080/api/productos/${id}`)
    .then((respuesta)=>{
        console.log(respuesta.data)
    }) 
    .catch((error)=>{
        console.log(error)
    })
}

// No puse ids para que puedas probarlo

//getAll();
// create(newProducto);
// getById('');
// updateById('',updateProducto);
// deleteById('');