class Student {
  constructor(firstName, lastName, studentID, email, githubUser) {
    this.firstName = firstName
    this.lastName = lastName
    this.studentID = studentID
    this.email = email
    this.githubUser = githubUser
  }

  // (array.length - 1) - that's always the last element in our array

  get() {
    return this
  }
}

module.exports = Student
