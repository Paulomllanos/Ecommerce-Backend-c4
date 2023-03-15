const express = require("express");
const userRouter = require("./routes/userRoutes")

require('dotenv').config();
require('./config/database');
//* Instanciamos express

const app = express();

//* middleware

app.use(express.json());

app.use(userRouter);



app.listen(process.env.PORT, () => console.log(`Servidor conectado en puerto: ${process.env.PORT}`))