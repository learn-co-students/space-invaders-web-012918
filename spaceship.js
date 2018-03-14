class Spaceship {
  constructor(name, crewMembers, phasers, shields, cloaked = false, warpDrive = "disengaged"){
    this.name = name
    this.crewMembers = crewMembers
    this.crew = crewMembers
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    if(this.crewMembers.length === 0){
      this.docked = true
    } else{ this.docked = false}
    if(this.phasers > 0){
      this.phasersCharge = "uncharged"
    }
    for (let i = 0; i < this.crewMembers.length; i++){
      crewMembers[i].currentShip = this
    }
  }
}
