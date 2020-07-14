const express = require('express');
require('dotenv').config();
const db_router = require('./router/db_router');
const coal_cost_router = require('./router/coal_cost_router');

const app = express();
//url encode + json encode
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//create router
app.use('/api/db', db_router);
app.use('/api/v1', coal_cost_router);


const port = process.env.PORT || 2828;
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})