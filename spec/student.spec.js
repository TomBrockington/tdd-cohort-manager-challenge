/* eslint-disable no-undef */
const Student = require('../src/student')
const CohortManager = require('../src/cohortManager')
const Cohort = require('../src/cohort')

describe('Student', () => {
  let cohort
  beforeEach(function () {
    cohort = new Cohort()
  })
  let cohortManager
  beforeEach(function () {
    cohortManager = new CohortManager()
  })
  let student
  beforeEach(function () {
    student = new Student()
  })
  it('create student', () => {
    // set up
    const firstName = 'Tom'
    const lastName = 'Brockington'
    const studentID = 1
    const email = 'tom@gmail.com'
    const githubUser = 'tomGit'
    // execute)

    // const expectedResult = {
    //   firstName: 'Tom',
    //   lastName: 'Brockington',
    //   studentID: 1,
    //   email: 'tom@gmail.com',
    //   githubUser: 'tomGit'
    // }
    const result = new Student(
      firstName,
      lastName,
      studentID,
      email,
      githubUser
    )
    // verify
    expect(result.firstName).toEqual(firstName)
    expect(result.lastName).toEqual(lastName)
    expect(result.studentID).toEqual(studentID)
    expect(result.email).toEqual(email)
    expect(result.githubUser).toEqual(githubUser)
  })

  it('create student and add to cohort 1', () => {
    // set up
    const cohortName = 'Cohort 1'
    const cohortManger = new CohortManager(cohortName)

    const firstName = 'Tom'
    const lastName = 'Brockington'
    const studentID = 1
    const email = 'tom@gmail.com'
    const githubUser = 'tomGit'
    // execute
    const resultCohort = cohortManger.createCohort(cohortName)
    const student = new Student(
      firstName,
      lastName,
      studentID,
      email,
      githubUser
    )
    const result = resultCohort.addStudentToCohort(student)
    // verify
    expect(resultCohort.name).toEqual(cohortName)
    expect(resultCohort.students.length).toEqual(1)
    expect(result.firstName).toEqual(firstName)
    expect(result.lastName).toEqual(lastName)
    expect(result.studentID).toEqual(studentID)
    expect(result.email).toEqual(email)
    expect(result.githubUser).toEqual(githubUser)
  })

  it('create 2 student and add to cohort 2', () => {
    // set up
    const cohortName = 'Cohort 1'
    const cohortManger = new CohortManager(cohortName)

    const firstName = 'Tom'
    const lastName = 'Brockington'
    const studentID = 1
    const email = 'tom@gmail.com'
    const githubUser = 'tomGit'
    // execute
    const resultCohort = cohortManger.createCohort(cohortName)
    const student = new Student(
      firstName,
      lastName,
      studentID,
      email,
      githubUser
    )
    const result = resultCohort.addStudentToCohort(student)
    // verify
    expect(resultCohort.name).toEqual(cohortName)
    expect(resultCohort.students.length).toEqual(1)
    expect(result.firstName).toEqual(firstName)
    expect(result.lastName).toEqual(lastName)
    expect(result.studentID).toEqual(studentID)
    expect(result.email).toEqual(email)
    expect(result.githubUser).toEqual(githubUser)
  })
})
