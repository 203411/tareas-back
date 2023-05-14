const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
// app.use(express.json());
const tareasRoute = require('./routes/tareasRoute');


// app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/tareas', tareasRoute );

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});