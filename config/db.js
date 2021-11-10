const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } )
        console.log('conexion exitosa')
    }catch (err) {
        console.log(err);
        process.exit(1); //detenemos la app
    }
}
module.exports = connectDB;