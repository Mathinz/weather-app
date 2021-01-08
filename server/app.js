require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 7080;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(
  bodyParser.urlencoded({
    limit: '5mb',
    extended: true,
  })
);
app.use(bodyParser.json({ limit: '5mb' }));

app.use('/', require('./routes/weatherRoute.js'));
app.use('/health', (req, res) => res.json('ok'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/404.html'));
});

app.listen(PORT, () => {
  console.info(`Server Running On Port: ${PORT}`);
});
