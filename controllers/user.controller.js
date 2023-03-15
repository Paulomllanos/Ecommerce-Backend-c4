//* importacion de la Referencia sobre la coleccion con su esquema determinado.
const User = require('../models/User');


const createUser = async(req, res) => {
   
    try {
        //* Guardar informacion en mi base de datos

        const newUser = new User(req.body);
        await newUser.save();


        res.json({success: true, message: "Usuario Creado", info: newUser})
            
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.json({success: true, info: users })
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

module.exports = {createUser, getUsers};
