class Thermostat{

  constructor(){
    this.DEFAULTTEMP = 20
    this.MINIMUMTEMP = 10
    this.PSONMAXTEMP = 25
    this.PSOFFMAXTEMP = 32
    this.LOWUSAGE = 18
    this.MEDUSAGE = 25
    this.temperature = this.DEFAULTTEMP
    this.powersaving = true
  };

  increaseTemp() {
    if(this.isPowerSavingOn()) {
      return;
    } else if (this.isPowerSavingOff()) {
      return;
    } else {
      this.temperature ++
    }
  };

  isPowerSavingOn() {
    return this.powersaving === true && this.temperature === this.PSONMAXTEMP;
  }

  isPowerSavingOff() {
    return this.powersaving === false && this.temperature === this.PSOFFMAXTEMP;
  }

  decreaseTemp() {
    if (this.temperature === this.MINIMUMTEMP ) {
      return;
  } else {
      this.temperature --
    }
  };

  powerSaving( tempSetting = 'off') {
    if (tempSetting === 'on') {
      this.powersaving = true
    }
    else if (tempSetting === 'off') {
      this.powersaving = false
    }
  };

  reset() {
    this.temperature = this.DEFAULTTEMP
  }

  energyUsage() {
    if(this.temperature < this.LOWUSAGE) {
      return 'low-usage';
    } else if (this.temperature <= this.MEDUSAGE ) {
      return 'medium-usage'
    } else if (this.temperature > this.MEDUSAGE ) {
      return 'high-usage'
    }
  };

};
