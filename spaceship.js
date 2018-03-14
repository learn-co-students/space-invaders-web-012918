class Spaceship {

  constructor(name, crew = []) {
    this.name = name
    this.phasers = 5
    this.shields = 4
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.docked = crew.length === 0 ? true : false
    this.phasersCharge = 'uncharged'
    this.crew = crew


    crew.forEach ((crewMember) => {
      crewMember.currentShip = this
    })


  }
}
