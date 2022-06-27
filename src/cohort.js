const Student = require('./student')
class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  createStudent(firstName, lastName, studentID, email, githubUser) {
    const student = new Student(
      firstName,
      lastName,
      studentID,
      email,
      githubUser
    )
    console.log(student)
    this.students.push(student)
    return student
  }

  addStudentToCohort(studentDetails) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].studentID === studentDetails.studentID) {
        return 'Student already in cohort'
      }
    }
    return this.createStudent(
      studentDetails.firstName,
      studentDetails.lastName,
      studentDetails.studentID,
      studentDetails.email,
      studentDetails.githubUser
    )
  }

  // removeStudentFromCohort(cohortName, studentDetails.studentID) {
  //   for (let i = 0; i < this.students.length; i++) {
  //     if (this.students[i].studentID === studentDetails.studentID) {
  //       return 'Student already in cohort'
  //     }
  //   }
  //   return this.createStudent(
  //     studentDetails.firstName,
  //     studentDetails.lastName,
  //     studentDetails.studentID,
  //     studentDetails.email,
  //     studentDetails.githubUser
  //   )
  // }

  // create(name) {
  //   // declair a variable that launches the check()
  //   // if var === name.check() return already exisits
  //   const existingCohort = this.checkCohortExists(name)
  //   if (existingCohort === false) {
  //     this.cohorts.push(name)
  //     console.log('cohort added', this.cohorts)
  //     const lastElement = this.cohorts.length - 1
  //     return this.cohorts[lastElement]
  //   } else {
  //     return `${name} already exists`
  //   }
  // }
}

module.exports = Cohort
