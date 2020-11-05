describe('Thermostat', function() {

  beforeEach(function() {
    thermostat = new Thermostat;
    // powersaving = on;
  });

  it('checks current temperature output 20', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it('Checks that the increaseTemp function increases temperature by 1', function(){
    thermostat.increaseTemp()
    expect(thermostat.temperature).toEqual(21)
  });

  it('check that the descreaseTemp function decreases temperature by 1', function(){
    thermostat.decreaseTemp()
    expect(thermostat.temperature).toEqual(19)
  });

  it('checks that temperature is never below 10', function(){
    thermostat.temperature = 10
    thermostat.decreaseTemp()
    expect(thermostat.temperature).toEqual(10)
  });

  it('checks when power saving mode is on, the temp cannot be increased beyond 25 degrees', function(){
    thermostat.temperature = 25
    thermostat.powerSaving('on')
    thermostat.increaseTemp()
    expect(thermostat.temperature).toEqual(25)
  });

  it('checks when power saving mode is off, the temp cannot be increased beyond 32 degrees', function(){
    thermostat.temperature = 32
    thermostat.powerSaving('off')
    thermostat.increaseTemp()
    expect(thermostat.temperature).toEqual(32)
  });

  it('checks that powersaving is on by default', function() {
    expect(thermostat.powersaving).toEqual(true)
  });

  it('checks that reset function sets temp to 20', function() {
    thermostat.increaseTemp()
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  });

  it('checks that energyUsage function returns low usage when temp less than 18 degress', function() {
    thermostat.decreaseTemp()
    thermostat.decreaseTemp()
    thermostat.decreaseTemp()
    expect(thermostat.energyUsage()).toEqual('low-usage')
  });

  it('checks that energyUsage function returns medium usage when temp > 18 and <= 25 degress', function() {
    thermostat.temperature = 25
    expect(thermostat.energyUsage()).toEqual('medium-usage')
  });

  it('checks that energyUsage function returns medium usage when temp > 25 degress', function() {
    thermostat.temperature = 26
    expect(thermostat.energyUsage()).toEqual('high-usage')
  });






















});
