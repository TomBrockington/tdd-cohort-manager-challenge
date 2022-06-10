const Cohort = require('../src/cohort')

describe('Cohort', () => {
  it('can create a chort with name.', () => {
    // set up
    const cohort = new Cohort()
    const expectedResult = 'Cohort 6'
    // execute
    const result = cohort.create(expectedResult)
    // verifiy
    expect(result).toEqual(expectedResult)
  })

  it('name already exists error message', () => {
    // set up
    const cohort = new Cohort()
    const expectedResult = 'Cohort 6 already exists'
    // execute
    cohort.create('Cohort 6')
    const result = cohort.create('Cohort 6')
    // verify
    expect(result).toEqual(expectedResult)
  })

  // it('removed by name', () => {
  //     //set up
  //     const cohort = new Cohort()
  //     const expectedResult = []
  //     //execute
  //     cohort.create('Cohort 6')
  //     const result = cohort.removeCohort('Cohort 6')
  //     //verify
  //     expect(result).toEqual(expectedResult)
  // })

  // it('add 3 then remove by name', () => {
  //     //set up
  //     const cohort = new Cohort()
  //     const expectedResult = [
  //         'Cohort 4',
  //         'Cohort 5'
  //     ]
  //     //execute
  //     cohort.create('Cohort 4')
  //     cohort.create('Cohort 5')
  //     cohort.create('Cohort 6')
  //     const result = cohort.removeCohort('Cohort 6')
  //     //verify
  //     expect(result).toEqual(expectedResult)
  // })

  // it('being removed not found ', () => {
  //     //set up
  //     const cohort = new Cohort()
  //     const expectedResult = 'Cohort not found'
  //     //execute
  //     cohort.create('Cohort 6')
  //     const result = cohort.removeCohort('Cohort 5')
  //     //verify
  //     expect(result).toEqual(expectedResult)
  // })

  // it('search by name.', () => {
  //     // set up
  //         const cohort = new Cohort()
  //         const expectedResult = 'Cohort 6'
  //     // execute
  //         cohort.create('Cohort 1')
  //         cohort.create('Cohort 2')
  //         cohort.create('Cohort 3')
  //         cohort.create('Cohort 4')
  //         cohort.create('Cohort 5')
  //         cohort.create('Cohort 6')
  //         const result = cohort.searchForCohortByName('Cohort 6')
  //     // verifiy
  //     expect(result).toEqual(expectedResult)

  // })

  // it('can create a chort with name.', () => {
  //     // set up
  //         const cohort = new Cohort()

  //     // execute
  //     // verifiy
  // })
})
