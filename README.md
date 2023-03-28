# Autenticacion y encriptacion

en construcción!!!!!!

1) Autenticacion jwt:
a) Git clone a clase anterior
b) Explicar crypto y hablar sobre bcrypt
c) hashear en create
d)pbkdf2Sync = algoritmo que permite cifrar password, que hace enfasis a una funcion derivada de claves
Recibe 5 parametros: (password, salt, iterations, keylen, digest)
 keylen: Longitud maxima en bytes
 digest: algoritmos de digestion de mensajes(sha512)
e) crear variable salt
f) Crear Login , y pensar en una logica para la validacion de password
g) Llevar toda la logica de encriptacion al modelo 
h) Crear un schema de direccion
i)Explicar uso del this
j) Explicacion de metodos y estaticos:


Los métodos estáticos pertenecen (o son declarados) como parte del objeto statics del esquema (Schema.statics). Dichos métodos sólo podrán ser usados directamente desde la Clase Model. Cada Modelo creado a partir del Schema que contiene el método podrá hacer uso del mismo. En Mongoose, cuando se declara un método estático, la palabra this (usada dentro del método) hará referencia al Modelo.

Los métodos de instancia pertenecen (o son declarados) como parte del objeto methods del esquema (Schema.methods). Los métodos así declarados sólo son accesibles (están disponibles) desde un Documento. Cada documento creado a partir del Modelo tendrá acceso al método de instancia. En Mongoose, cuando se declara un método de instancia, la palabra this (usada dentro del método) hará referencia al Documento.

k) json web token
m) Partes de json web token 
n) Implementacion de jason web token 
o) Metodo en models jwt
p) decodificacion jwt -> middleware
