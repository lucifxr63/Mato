// controllers/orderController.js
const Order = require('../models/order');
const Product = require('../models/product');

exports.createOrder = async (req, res) => {
    const { productos, total } = req.body;
    try {
        const order = new Order({
            usuario: req.user.id,
            productos,
            total
        });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ usuario: req.user.id }).populate('productos.producto');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
