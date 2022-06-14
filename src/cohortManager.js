const Cohort = require('./cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  // ADD TO THIS A FUNCTION THAT CHECKS IF NAME EXISTS
  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  // TO ADD TO CREATECOHORT
  checkCohortExists(name) {
    const exists = this.searchForCohortbyName(name)
    if (exists === false) {
      return false
    } else {
      return true
    }
  }

  searchForCohortbyName(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === name) {
        console.log('Found ', this.cohorts[i].name)
        return this.cohorts[i]
      }
    }
    return false
  }

  removeCohort(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      const myName = cohort.name
      if (name === myName) {
        delete this.cohorts[i]
      } else {
        return 'Cohort Not Found'
      }
    }
  }
}

module.exports = CohortManager
