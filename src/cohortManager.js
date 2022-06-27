/* eslint-disable no-unreachable-loop */
/* eslint-disable no-undef */
const Cohort = require('./cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  // ADD TO THIS A FUNCTION THAT CHECKS IF NAME EXISTS
  createCohort(name) {
    const nameCheck = this.checkCohortExists(name)
    // console.log('nc', nameCheck)
    if (nameCheck === false) {
      const cohort = new Cohort(name)
      this.cohorts.push(cohort)
      return this.cohorts[0]
    } else {
      return `${name} already exists`
    }
  }

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
        return true
      }
    }
    return false
  }

  removeCohort(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      console.log('cohrt', cohort)
      const myName = cohort.name
      console.log('myname ', myName)
      if (name === myName) {
        this.cohorts.splice(i, 1)
        return `${name} removed`
      }
    }
    return 'Cohort Not Found'
  }
}

module.exports = CohortManager
