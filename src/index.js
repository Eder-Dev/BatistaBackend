const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const multer = require('multer');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes)
app.use('/files', express.static(__dirname + '/upload/'));
app.listen(process.env.PORT || 3000);
