import carritoService from "../service/carrito.service.js";

const getAllProductCarrito = async (req, res) => {
  try {
    const response = await carritoService.getProductByFilters({});

    res.json(response);
  } catch (err) {
    if (err.statusCode) {
      return res.status(statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

const createCarrito = async (req, res) => {
  try {
    console.log("aqui el body",req.body )
    const response = await carritoService.createCarrito(req.body);

    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

const getOneProductCarrito = async (req, res) => {
  try {
    const filters = { _id: req.params.id };
    const response = await carritoService.getProductByFilters(filters);

    res.json(response);
  } catch (err) {
    if (err.statusCode) {
      return res.status(statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

export default { getAllProductCarrito, createCarrito, getOneProductCarrito };
