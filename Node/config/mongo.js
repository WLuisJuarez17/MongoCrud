
const mongoose = require('mongoose');

const dbConect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        // useNeWUrlParser: true,
        useUnifiedTopology: true,
    }, 
    (err, res) => {
        if (!err){
            console.log('Conectado a la BD');
        }else{
            console.log('Error al conectar a la BD');
            console.log(err);
        }
    }
    );
};

module.exports = dbConect;