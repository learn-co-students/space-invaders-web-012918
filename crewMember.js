class CrewMember {
  constructor (position, currentShip = 'Looking for a Rig') {
    this.position = position
    this.currentShip = currentShip
    // console.log(currentShip)
  }

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    } else {

    }
  }

  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    } else {

    }
  }

  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Defender'){
      return 'had no effect'
    } else {
      this.currentShip.cloaked = true
    }

  }

}
