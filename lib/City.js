const Building = require('./Building.js');

class City extends Building {
  constructor (x, y, width, height) {
    super(x, y, width, height);
    this.exists = true;
  }
}

module.exports = City;