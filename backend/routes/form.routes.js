module.exports = app => {
  const forms = require("../controllers/form.controller.js");

  var router = require("express").Router();

  // Create a new form
  router.post("/", forms.create);

  // Get all forms
  router.get("/", forms.findAll);

  // Get by Id
  router.get("/:id", forms.findOne);

  // Get by email
  router.get("/:email", forms.findByEmail);

  // Update by Id
  router.put("/:id", forms.update);

  // Delete by Id
  router.delete("/:id", forms.delete);

  // Delete all
  router.delete("/", forms.deleteAll);

  app.use('/api/forms', router);
};