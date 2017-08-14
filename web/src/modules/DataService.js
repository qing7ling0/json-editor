'use strict';

let _instance = null;

class DataService {
  constructor() {
    if (_instance === null) {
      _instance = this;
    }

    return _instance;
  }

  Load(path) {
    var data = require("./package.json")
    return { data:data};
  }
}


module.exports = new DataService();