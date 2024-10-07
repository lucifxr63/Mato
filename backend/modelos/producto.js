// models/product.js
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    valor: { type: Number, required: true },
    descripcion: { type: String, required: true },
    stock: { type: Number, required: true },
    costeProduccion: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
