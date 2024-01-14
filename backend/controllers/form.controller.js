const { form } = require("rxjs");
const db = require("../models");
const Form = db.forms;

// Create and save new form
exports.create = (req, res) => {
  const form = new Form({
    semester: req.body.semester,
    studentName: req.body.studentName,
    studentId: req.body.studentId,
    studentEmail: req.body.studentEmail,
    primaryAdvisor: req.body.primaryAdvisor,
    addAdvisorOne: req.body.addAdvisorOne,
    addAdvisorTwo: req.body.addAdvisorTwo,
    addAdvisorThree: req.body.addAdvisorThree,
    addAdvisorFour: req.body.addAdvisorFour,
    researchProjectTitle: req.body.researchProjectTitle,
    researchProjectDescription: req.body.researchProjectDescription,
    researchProjectObjectives: req.body.researchProjectObjectives,
    numCreditHours: req.body.numCreditHours
  });

  //Save to database
  form
    .save(form)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating Form."
      });
    });
};

// Find all forms from the database
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } :

    Form.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occured while retrieving forms."
        })
      })
};

// Find a single form
exports.findOne = (req, res) => {

};

// Update a form by id
exports.update = (req, res) => {

};

// Delete a form by id
exports.delete = (req, res) => {

};

// Delete all forms
exports.deleteAll = (req, res) => {

};

// Find forms associated with given email
exports.findByEmail = (req, res) => {
  const email = req.params.studentEmail;
  Form.find({ email })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving forms."
      })
    })
};