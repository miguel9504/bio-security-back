const Producto = require('../models/producto');


exports.crearProducto = async (req, res) => {
    try {
        let producto;
        //creamos el producto 
        producto = new Producto(req.body);

        //guardamos el producto
        await producto.save();
        res.send(producto);

    } catch (err) {
        console.log(err);
        res.status(500).send("Hubo un error")
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (err) {
        console.log(err);
        res.status(500).send("Hubo un error")
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        const { nombre, categoria, descripcion, cantidad} = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({msg:"No se encontro el producto"});
        }
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.descripcion = descripcion;
        producto.cantidad = cantidad;

        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new: true});
        res.json(producto);

    } catch (err) {
        console.log(err);
        res.status(500).send("Hubo un error")
    }
}
exports.obtenerProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({msg:"No se encontro el producto"});
        }
        res.json(producto);

    } catch (err) {
        console.log(err);
        res.status(500).send("Hubo un error")
    }
}
exports.eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) {
            res.status(404).json({msg:"No se encontro el producto"});
        }
        res.json({msg:"Producto eliminado"});

    } catch (err) {
        console.log(err);
        res.status(500).send("Hubo un error")
    }
}