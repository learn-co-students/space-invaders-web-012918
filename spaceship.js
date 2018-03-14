class Spaceship {
  constructor (name, crew, phasers, shields, cloaked=false, warpDrive='disengaged', phasersCharge='uncharged', docked) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
    // this.crew.length > 0 ? this.docked = false : this.docked = true
    this.docked = this.isShipDocked()
    if (this.crew.length > 0) {
      this.crew.forEach(crewmem => {
        crewmem.currentShip = this
      })
    }
  }

  isShipDocked() {
    return this.crew.length > 0 ? false : true
  }

}
