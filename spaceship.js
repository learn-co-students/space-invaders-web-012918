class Spaceship {
    constructor(name, crew, phasers, shields) {
      this.name = name
      this.crew = crew
      // if (crew === undefined) {
      //   this.crew = []
      // } else if (Array.isArray(crew)) {
      //   this.crew = crew
      // } else {
      //   this.crew = [crew]
      // }
      this.phasers = phasers
      this.shields = shields
      this.cloaked = false
      // this.docked = true
      this.crew.length === 0 ? this.docked = true : this.docked = false
      this.warpDrive = "disengaged"
      this.phasersCharge = "uncharged"

      for(let member of crew) {
        member.currentShip = this
      }
    }
}
