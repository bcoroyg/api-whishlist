import mongoose from 'mongoose';

const dbConnection = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Base de datos conectada exitosamente")
    } catch (error) {
        console.log(error);
        throw new Error('Error en la inicialización de la base de datos');
    }
}

export default dbConnection;