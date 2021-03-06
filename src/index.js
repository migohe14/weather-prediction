const express = require('express');
const morgan = require('morgan');

const app = express();

//Settings
//*process.env.PORT  Esta cogiendo el puerto que te da el sistema operativo
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/weather', require('./routes/api'));


//Static Files
//Enviamos carpeta public al navegador
app.use(express.static(__dirname + '/public'))


//Server is listenning
app.listen(app.get('port'), () => {
    console.log("Server in port", app.get('port'))
})