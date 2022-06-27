/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const Cohort = require('../src/cohort')
const CohortManager = require('../src/cohortManager')
const Student = require('../src/student')

describe('Cohort', () => {
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
  it('create cohort', () => {
    // set up
    const cohortName = 'Cohort 6'
    const expectedCohort = new Cohort(cohortName)
    // execute
    const result = cohortManager.createCohort(cohortName)
    // verify
    expect(result).toEqual(expectedCohort)
  })

  it('search for cohort by name', () => {
    // set up
    const cohortName = 'Cohort 2'
    const expectedCohort = new Cohort(cohortName)
    // execute
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort(cohortName)
    cohortManager.createCohort('Cohort 3')
    const result = cohortManager.searchForCohortbyName(cohortName)
    // verify
    expect(result).toEqual(true)
  })

  it('check non existant cohorts are detected', () => {
    // set up
    const cohortName = 'Cohort 2'
    const expectedResult = false
    // execute
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 3')
    const result = cohortManager.searchForCohortbyName(cohortName)
    // verify
    // console.log(expectedResult)
    expect(result).toEqual(expectedResult)
  })

  it('check cohort exists', () => {
    const cohortName = 'Cohort 2'
    const expectedResult = true
    // execute
    cohortManager.createCohort(cohortName)
    const result = cohortManager.checkCohortExists(cohortName)
    // verify
    expect(result).toEqual(expectedResult)
  })

  it('name already exists error message', () => {
    // set up
    const expectedResult = 'Cohort 6 already exists'
    // execute
    cohortManager.createCohort('Cohort 6')
    const result = cohortManager.createCohort('Cohort 6')
    // verify
    expect(result).toEqual(expectedResult)
  })

  it('removed by name', () => {
    // set up
    const expectedResult = 'Cohort 6 removed'
    // execute
    cohortManager.createCohort('Cohort 6')
    console.log('this', cohortManager.cohorts)

    const result = cohortManager.removeCohort('Cohort 6')
    console.log('this', cohortManager.cohorts)

    // verify
    expect(result).toEqual(expectedResult)
  })

  it('add 3 then remove by name', () => {
    // set up
    const expectedResult = 'Cohort 6 removed'
    const expectedArrayResult = ['Cohort 4', 'Cohort 5']
    // execute
    cohortManager.createCohort('Cohort 4')
    cohortManager.createCohort('Cohort 5')
    cohortManager.createCohort('Cohort 6')
    console.log('this', cohortManager.cohorts)
    const result = cohortManager.removeCohort('Cohort 6')
    console.log('this', cohortManager.cohorts)

    // verify
    expect(result).toEqual(expectedResult)
  })

  it('being removed not found ', () => {
    // set up
    const expectedResult = 'Cohort Not Found'
    // execute
    cohortManager.createCohort('Cohort 6')
    const result = cohortManager.removeCohort('Cohort 5')
    // verify
    expect(result).toEqual(expectedResult)
  })

  it('search by name.', () => {
    // set up
    const expectedResult = true
    // execute
    cohortManager.createCohort('Cohort 1')
    cohortManager.createCohort('Cohort 2')
    cohortManager.createCohort('Cohort 3')
    cohortManager.createCohort('Cohort 4')
    cohortManager.createCohort('Cohort 5')
    cohortManager.createCohort('Cohort 6')
    const result = cohortManager.searchForCohortbyName('Cohort 6')
    // verifiy
    expect(result).toEqual(expectedResult)
  })
})
