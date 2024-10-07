// models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true },
    run: { type: String, required: true, unique: true },
    correo: { type: String, required: true, unique: true },
    estado: { type: String, default: 'activo' },
    comuna: { type: String, required: true },
    region: { type: String, required: true },
    sexo: { type: String, required: true },
    rol: { type: String, enum: ['dueño', 'administrador', 'cliente', 'encargado_despacho', 'cajero_virtual'], required: true },
    password: { type: String, required: true },
}, { timestamps: true });

// Hash password before saving user
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
