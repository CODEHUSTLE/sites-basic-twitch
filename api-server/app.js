require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());

const homeRouter = require('./routes/home');
app.use('/', homeRouter);

const requestsRouter = require('./routes/requests');
app.use('/requests', requestsRouter);

app.listen(process.env.PORT, () => console.log('server started'));
