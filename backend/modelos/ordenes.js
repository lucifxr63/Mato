// models/order.js
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    productos: [{
        producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        cantidad: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    estado: { type: String, enum: ['pendiente', 'pagado', 'anulado'], default: 'pendiente' },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
