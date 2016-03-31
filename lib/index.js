var data = require('../data/data.json');
// Polyfill
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(predicate) {
      if (this == null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        if (i in list) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return value;
          }
        }
      }
      return undefined;
    }
  });
}

/**
 * @class {NationalHighSchoolData}
 */
module.exports = {

  __data: data,

  /**
  * get all schools
  * @return {array} schools - school list
  */

  get schools() {
    return this.__data;
  },

  /**
  * get school by school code
  * @param  {string | number} code - school code
  * @return {object} school - school instance
  */
  getByCode: function(code) {
    return this.schools.find(function(item) {
      if (+item.code === +code) {
        return item;
      }
    });
  },

  /**
  * get schools by area code
  * @param  {string | number} areaCode - area code
  * @return {array} schools - school list
  */
  getByAreaCode: function(areaCode) {
    if (areaCode) {
      const tmp = [];
      this.schools.find(function(item) {
        if (+(item.area_code.toString().substring(0, 4)) === +(areaCode.toString().substring(0, 4))) {
          tmp.push(item);
        }
      });
      if (tmp.length === 0) {
        this.schools.find(function(item) {
          if (+(item.area_code.toString().substring(0, 3)) === +(areaCode.toString().substring(0, 3))) {
            tmp.push(item);
          }
        });
      }
      return tmp;
    } else {
      return []
    }
  },

  /**
  * search school by name
  * @param  {string} name - school name
  * @return {array} schools - school list
  */
  searchByName: function(name) {
    const tmp = [];
    this.schools.find(function(item) {
      if (item.name.indexOf(name) !== -1) {
        tmp.push(item);
      }
    });
    return tmp;
  }
};
