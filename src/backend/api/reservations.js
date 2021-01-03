const express = require("express");
const router = express.Router();
const knex = require("../database");

//...........................................Returns all meals	

router.get("/", async (request, response) => {

    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const resault = await knex("reservations").select("*");
        response.json(resault);

    } catch (error) {
        throw error;
    }
});

//............................................Adds a new reservation

router.post("/", async (request, response) => {

    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const resault = await knex("reservations").insert(request.body);
        response.json(resault);

    } catch (error) {
        throw error;
    }
});

//...................................................Returns reservation by id	

router.get("/:id", async (request, response) => {

    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const resault = await knex("reservations").select("*").where({
            id: request.params.id
        });
        response.json(resault);

    } catch (error) {
        throw error;
    }
});

//.....................................................Updates the reservation by id	

router.put("/:id", async (request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const resault = await knex("reservations").select("*").where({
            id: request.params.id
        }).update({
            name: "Ahmad Fakhri"
        });
        response.json(resault);
    } catch (error) {
        throw error;
    }
});

//.......................................................Deletes the reservation by id	

router.delete("/:id", async (request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const resault = await knex("reservations").select("*").where({
            id: request.params.id
        }).delete();
        response.json(resault);
    } catch (error) {
        throw error;
    }
});


module.exports = router;