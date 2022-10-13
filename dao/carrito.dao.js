import CarritoModel from '../models/modelsCarrito.js'

const getCarrito = async({usuarioid,ProductoId}) =>{
    const data = await CarritoModel.find({ usuarioid: usuarioid},{ productos: 1, _id: 0 })  
    //console.log("datos carrito", data)
    return data
}

const getCarritoUsurioID = async (req) => {
  const usuarioid = req.usuarioid
  const ProductoExiste = await CarritoModel.find({ usuarioid: usuarioid})

  return ProductoExiste

}

const updateCarritoID = async (req) => {
  const usuarioid = req.usuarioid
  const productos = req.productos
  const UpdateProductosCarrito = await CarritoModel.updateOne({ usuarioid: usuarioid},{ $set: { productos : productos }})

  return UpdateProductosCarrito

}

const createCarrito = async(req) =>{
  const data = await CarritoModel.create(req)  
  return data
}

  export default {
    getCarritoUsurioID,
    updateCarritoID,
    getCarrito,
    createCarrito
  }