const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // <<--- Carga el archivo .env

const app = express();

app.use(cors());
app.use(express.json());

// Usa la variable de entorno
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/meanDB';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log(`Conectado a MongoDB en ${mongoUri}`))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

app.get('/', (req, res) => {
    res.send('API funcionando');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
