const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Producto', ProductoSchema);