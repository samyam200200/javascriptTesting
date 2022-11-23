class GalaxyBuds {
  constructor(number, colorL, colorR, volume, battery, chargingCase) {
    this.number = number;
    this.color = {
      left: colorL,
      right: colorR,
    };
    this.volume = volume;
    this.battery = battery;
    this.chargingCase = chargingCase;
  }
}

export default GalaxyBuds;
