class Spaceship {
  constructor (name, crewMembers, phasers, shields) {
    this.name = name
    this.crew = crewMembers
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = this.isDocked()
    this.phasersCharge = 'uncharged'
    this.hasCrew();
  }

  isDocked () {
    return this.crew.length === 0 ? true : false
  }

  hasCrew() {
    return this.crew.forEach(member => member.currentShip = this)  
  }
}
