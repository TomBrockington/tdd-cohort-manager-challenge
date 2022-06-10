class Cohort {
  constructor() {
    this.cohorts = []
  }

  create(name) {
    this.cohorts.push(name)
    console.log('cohort added', this.cohorts)
    const lastElement = this.cohorts.length - 1
    return this.cohorts[lastElement]
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

  // searchForCohortbyName (name) {
  //     for (let i = 0; i < this.cohorts.length; i++) {
  //         if (this.cohorts[i] === name) {

  //         }
  //     }
  // }
}

module.exports = Cohort
