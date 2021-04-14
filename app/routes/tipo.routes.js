module.exports = app => {
    const tipo = require("../controllers/tipo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tipo
    router.post("/", tipo.create);
  
    // Retrieve all Tipos
    router.get("/", tipo.findAll);

    // Retrieve a single Tipo with id
    router.get("/:id", tipo.findOne);
  
    // Update a Tipo with id
    router.put("/:id", tipo.update);
  
    // Delete a Tipo with id
    router.delete("/:id", tipo.delete);
  
    // Delete all Tipos
    router.delete("/", tipo.deleteAll);
  
    app.use('/api/tipo', router);
  };