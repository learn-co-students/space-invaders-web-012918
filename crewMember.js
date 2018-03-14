// let CrewMember = (function() {
//   let id = 0
//   let all = []

class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = "Looking for a Rig"
    // this.id = ++id

    // all.push(this)
  }

  // static all() {
  //   return [...all]
  // }

  engageWarpDrive() {
    if (this.position !== "Pilot" || this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else {
      this.currentShip.warpDrive = "engaged"
    }
  }

  setsInvisibility() {
    if (this.position !== "Defender" || this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else {
      this.currentShip.cloaked = true
    }
  }

  chargePhasers() {
    if (this.position !== "Gunner" || this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else {
      this.currentShip.phasersCharge = "charged"
    }
  }
}
// })()
