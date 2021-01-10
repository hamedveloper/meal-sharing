const express = require("express");
const router = express.Router();
const knex = require("../database");

//...........................................Returns all meals

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const resault = await knex("reviews").select("*");
    response.json(resault);
  } catch (error) {
    throw error;
  }
});

/////////////////////////////////////////////Returns Avarge Star for every meal

router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const resault = await knex("reviews")
      .avg("numberOfStars")
      .where({ mealId: request.params.id });

    response.json(resault);
  } catch (error) {
    throw error;
  }
});

//............................................Adds a new review

router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const resault = await knex("reviews").insert(request.body);
    response.json(resault);
  } catch (error) {
    throw error;
  }
});

//...................................................Returns reviews by  mealId

router.get("/meal/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const resault = await knex("reviews").select("*").where({
      mealId: request.params.id,
    });
    response.json(resault);
  } catch (error) {
    throw error;
  }
});

//.......................................................Deletes the review by id

router.delete("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const resault = await knex("reviews")
      .select("*")
      .where({
        id: request.params.id,
      })
      .delete();
    response.json(resault);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
