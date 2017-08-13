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
    return { data:{title:"Json Editor"}};
  }
}

module.exports = new DataService();