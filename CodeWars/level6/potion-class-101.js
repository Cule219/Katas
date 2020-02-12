class Potion {
    // magic goes here...
    constructor(color, volume) {
      this.color = color;
      this.volume = volume;
    }
    mix(potion) {
      const newVolume = potion.volume + this.volume;
      return new Potion(potion.color.map((c,i) => Math.ceil((c*potion.volume+this.color[i]*this.volume)/newVolume)), newVolume);
    }
  }