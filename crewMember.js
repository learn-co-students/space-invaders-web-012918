class CrewMember {

  constructor(position, currentShip = 'Looking for a Rig') {
    this.position = position
    this.currentShip = currentShip
    // if (this.currentShip !== 'Looking for a Rig') {
    //   this.currentShip.crew.push(this)
    // }
  }

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else {
      // this.currentShip.phasersCharge = 'charged'
    }
  }

  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else {
      // this.currentShip.warpDrive = 'engaged'
    }
  }

  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Defender') {
      return 'had no effect'
    }

    if (this.currentShip.cloaked) {
      this.currentShip.cloaked = false
    } else {
      this.currentShip.cloaked = true
    }

  }
}
