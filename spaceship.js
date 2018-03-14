class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", docked = true, phasersCharge = "uncharged"){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    if (crew.length != 0) {
      this.docked = false
    } else { this.docked = true}
    this.phasersCharge = phasersCharge

    for (let member of crew) {
      member.currentShip = this
    }

  }


}
