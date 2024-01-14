module.exports = mongoose => {
  const Form = mongoose.model(
    "form",
    mongoose.Schema(
      {
        semester: String,
        studentName: String,
        studentId: String,
        studentEmail: String,
        primaryAdvisor: String,
        addAdvisorOne: String,
        addAdvisorTwo: String,
        addAdvisorThree: String,
        addAdvisorFour: String,
        researchProjectTitle: String,
        researchProjectDescription: String,
        researchProjectObjectives: String,
        numCreditHours: Number
      },
      { timestamps: true }
    )
  );

  return Form;
}