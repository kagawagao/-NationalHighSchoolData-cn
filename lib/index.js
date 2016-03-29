var data = require('../data/data.json');

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
