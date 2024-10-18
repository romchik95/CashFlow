const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

const { MONGODB_URI } = require('./config');

require('./models/user_model');
app.use(express.json());
app.use(require('./routes/login'));

mongoose.connect(MONGODB_URI);

mongoose.connection.on('connected', ()=>{
    console.log("Підключено");
});

mongoose.connection.on('error', (error)=>{
    console.log("Помилка", error);
});

app.listen(PORT, () => {
    console.log("Сервер запущено");
});