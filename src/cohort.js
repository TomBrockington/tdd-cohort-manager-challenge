class Cohort {
  constructor() {
    this.cohorts = []
  }

  create(name) {
    // declair a variable that launches the check()
    // if var === name.check() return already exisits
    const existingCohort = this.checkCohortExists(name)
    if (existingCohort === false) {
      this.cohorts.push(name)
      console.log('cohort added', this.cohorts)
      const lastElement = this.cohorts.length - 1
      return this.cohorts[lastElement]
    } else {
      return `${name} already exists`
    }
  }

  checkCohortExists(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i] === name) {
        console.log(this.cohorts[i], ' already exists')
        return this.cohorts[i]
      }
    }
    return false
  }

  removeCohort(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i] === name) {
        this.cohorts.splice(i, 1)
        console.log('cohort removed =', name)
        console.log('remaining cohorts =', this.cohorts)
        return this.cohorts
      }
    }
    return 'Cohort not found'
  }

  searchForCohortbyName(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i] === name) {
        console.log('found ', this.cohorts[i])
        return this.cohorts[i]
      }
    }
    return 'Name does not exist'
  }
}

module.exports = Cohort
