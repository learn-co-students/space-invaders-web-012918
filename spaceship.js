class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name,
    this.crew = crew,
    this.phasers = phasers,
    this.shields = shields,
    this.cloaked = false,
    this.warpDrive = "disengaged",
    this.phasersCharge = "uncharged",
    this.assignShips()
    this.docked = false
    this.isdocked()

  }

  assignShips() {
    for(let member of this.crew) {
      member.currentShip = this
    }
  }

  isdocked() {
    if (this.crew.length > 0 ) {
      this.docked = false
    } else {
      this.docked = true
    }
  }
}
