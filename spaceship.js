class Spaceship {
  constructor (name, crewMembers, phasers, shields) {
    this.name = name
    this.crewMembers = crewMembers
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = this.isDocked()
    this.phasersCharge = 'uncharged'
  }

  isDocked () {
    return this.crewMembers.length === 0 ? true : false
  }
}
