const express = require('express');
const router = express.Router();
const Response = require('./Response');
const DbController = require('../db/DbController');
//create db
router.get('/createdb', async (req, res) => {
    await DbController.getInstance().createDb(process.env.DB, (err, result) => {
        if (err)
            res.send(err.message);
        res.send("Database Created" + result)
    });
});

//create coal cost table
router.get('/table/coal_cost_table', async (req, res) => {
    await DbController.getInstance().createCoalCostTable((err, result) => {
        if (err) {
            let response = new Response(500, err.message, err);
            res.send(response);
        } else {
            let response = new Response(200, "Coil Cost Table Created Successfully", result);
            res.send(response);
        }
    });
});

//create soil cost table
router.get('/table/soil_cost_table', async (req, res) => {
    await DbController.getInstance().createSoilCostTable((err, result) => {
        if (err) {
            let response = new Response(500, err.message, err);
            res.send(response);
        } else {
            let response = new Response(200, "Soil Cost Table Created Successfully", result);
            res.send(response);
        }
    });
});


module.exports = router;