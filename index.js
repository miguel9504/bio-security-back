const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')

// crear servidor
const app = express();

//conectar a la base de datos
conectarDB();
app.use(cors())

app.use(express.json());
app.use('/api/productos', require('./routes/producto'));


app.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000');
});