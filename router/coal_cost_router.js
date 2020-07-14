/**
 * @version 1
 * @description cost realted all end points
 */
const express = require('express');
const AppController = require('../db/AppController');
const router = express.Router();
const Response = require('./Response');

/**
 * @method POST
 * @router http://localhost:2727/api/v1/post/coal_cost_table
 */
router.post('/post/:table', async (req, res) => {
    const obj = req.body;
    const table = req.params.table;
    await AppController.getInstance().insert(table, obj, (err, results) => {
        if (err) {
            let response = new Response(500, err.message, err);
            res.send(response);
        } else {
            results.new_object = obj;
            let response = new Response(200, " Cost Added Successfully", results);
            res.send(response);
        }
    });
});

/**
 * @method GET
 * @router http://localhost:2727/api/v1/get/coal_cost_table
 * @description get list of coil cost list
 */
router.get('/get/:table', async (req, res) => {
    const table = req.params.table;
    await AppController.getInstance().getList(table, (err, results) => {
        if (err) {
            let response = new Response(500, err.message, err);
            res.send(response);
        } else {
            if (results) {
                let response = new Response(200, " Cost list get Successfully", results);
                res.send(response);
            } else {
                let response = new Response(404, " Cost list NOT FOUND", []);
                res.send(response);
            }
        }
    });
});

/**
 * @method GET
 * @router http://localhost:2727/api/v1/get/coal_cost_table/:id
 * @description get single coil cost 
 */
router.get('/get/:table/:id', async (req, res) => {
    const id = req.params.id;
    const table = req.params.table;
    await AppController.getInstance().get(table, id, (err, results) => {
        if (err) {
            let response = new Response(500, err.message, err);
            res.send(response);
        } else {
            if (results[0]) {
                let response = new Response(200, " Cost get Successfully", results[0]);
                res.send(response);
            } else {
                let response = new Response(404, " Cost NOT FOUND", {});
                res.send(response);
            }
        }
    });
});

/**
 * @method PUT
 * @router http://localhost:2727/api/v1/get/coal_cost_table/:id
 * @description update a single cost info
 */
router.put('/put/:table/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    obj.id = id;
    obj.updated_at = new Date();
    const table = req.params.table;

    await AppController.getInstance().update(table, obj, (err, result) => {
        if (err) {
            let response = new Response(500, err.message, err);
            res.send(response);
        } else {
            result.updated_object = obj;
            let response = new Response(200, ` Cost Updated Successfully`, result);
            res.send(response);
        }
    });
});


module.exports = router;