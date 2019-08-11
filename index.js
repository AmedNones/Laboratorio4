//Utilizamos el express, aqui lo mandaremos a llamar
const express = express(`express`);

// Definimos la app definiendo el express
const app = express();
const bodyParser = require(`body parser`);

//Configuramos la app para que utilice bodayParser(), esto nos dejara usar la informacion 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

const port = process.env.port ||8080;
const router = express.router(); //Creamos el router express

//Seteamos la ruta principal
router.get("/",function(req, res){
    res.json({ message: 'Hooolaa :)'});


});
//le decimos a la aplicacion la ruta que agregamos

app.use(`/api`,router);

//Ahora iniciamos el servidor

app.listen(port);
console.log(console.log(`Aplicación creada en el puerto ${port}`));
