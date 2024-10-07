# Mato
 node
mato 
instala :
npm install bcryptjs jsonwebtoken
npm init -y
npm install express mongoose dotenv


BASE DE DATOS:

db.createCollection('Usuarios')

db.Usuarios.insertMany([
    {
        nombre: "Juan",
        apellido: "Pérez",
        direccion: "Av. Siempre Viva 123",
        telefono: "987654321",
        run: "12345678-9",
        correo: "juanperez@example.com",
        estado: "activo",
        comuna: "Maipú",
        region: "Metropolitana",
        sexo: "masculino",
        rol: "cliente",
        password: "hashed_password"
    },
    {
        nombre: "Ana",
        apellido: "González",
        direccion: "Calle Falsa 456",
        telefono: "912345678",
        run: "98765432-1",
        correo: "anagonzalez@example.com",
        estado: "activo",
        comuna: "Santiago",
        region: "Metropolitana",
        sexo: "femenino",
        rol: "administrador",
        password: "hashed_password"
    }
])


db.createCollection('Productos')

db.Productos.insertMany([
    {
        nombre: "Sushi Especial",
        valor: 4500,
        descripcion: "Sushi de salmón con queso crema",
        stock: 100,
        coste_produccion: 2500
    },
    {
        nombre: "Sashimi",
        valor: 5000,
        descripcion: "Cortes de pescado crudo",
        stock: 50,
        coste_produccion: 3000
    }
])

db.createCollection('Recibos')

db.Recibos.insertOne({
    fecha: new Date(),
    costo_total: 9500,
    usuario_id: ObjectId("ID_DEL_USUARIO"),
    productos: [
        { producto_id: ObjectId("ID_DEL_PRODUCTO_1"), cantidad: 2 },
        { producto_id: ObjectId("ID_DEL_PRODUCTO_2"), cantidad: 1 }
    ]
})

db.createCollection('OrdenesDespacho')

db.OrdenesDespacho.insertOne({
    fecha: new Date(),
    costo: 9500,
    recibo_id: ObjectId("ID_DEL_RECIBO"),
    usuario_id: ObjectId("ID_DEL_USUARIO"),
    repartidor_id: ObjectId("ID_DEL_REPARTIDOR"),
    direccion: "Calle de entrega 789",
    estado: "pendiente"
})

db.createCollection('Historial')

db.Historial.insertOne({
    usuario_id: ObjectId("ID_DEL_USUARIO"),
    orden_id: ObjectId("ID_DEL_ORDEN"),
    fecha: new Date(),
    estado: "completado"
})

db.createCollection('Empleados')

db.Empleados.insertOne({
    usuario_id: ObjectId("ID_DEL_USUARIO"),
    rol: "cajero"
})

db.createCollection('InfoProductos')

db.InfoProductos.insertMany([
    {
        producto_id: ObjectId("ID_DEL_PRODUCTO"),
        cantidad: 5,
        valor_unitario: 4500,
        recibo_id: ObjectId("ID_DEL_RECIBO")
    },
    {
        producto_id: ObjectId("ID_DEL_PRODUCTO_2"),
        cantidad: 3,
        valor_unitario: 5000,
        recibo_id: ObjectId("ID_DEL_RECIBO")
    }
])



COMANDOS:
show dbs
show collections
db.NombreColeccion.find().pretty()
