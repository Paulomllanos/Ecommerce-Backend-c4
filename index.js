const express = require("express");
const userRouter = require("./routes/userRoutes");
const productRouter = require('./routes/productRoutes')

require('dotenv').config();

//* traemos la coneccion de nuestra base de datos las servidor
require('./config/database');
//* Instanciamos express

const app = express();

//* middleware

app.use(express.json());

app.use(userRouter);
app.use(productRouter);



app.listen(process.env.PORT, () => console.log(`Servidor conectado en puerto: ${process.env.PORT}`))