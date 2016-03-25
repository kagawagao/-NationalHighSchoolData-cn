const data = require('../data/data.json')

/**
 * @class {NationalHighSchoolData}
 */
export default {

  __data: data,

  /**
  * get all schools
  * @return {array} schools - school list
  */

  get schools () {
    return this.__data
  },

  /**
  * get school by school code
  * @param  {string | number} code - school code
  * @return {object} school - school instance
  */
  getByCode (code) {
    return this.data.find(item => {
      if (+item.code === +code) {
        return item
      }
    })
  },

  /**
  * get schools by area code
  * @param  {string | number} areaCode - area code
  * @return {array} schools - school list
  */
  getByAreaCode (areaCode) {
    const tmp = []
    this.data.find(item => {
      if (+item.area_code === +areaCode) {
        tmp.push(item)
      }
    })
    return tmp
  },

  /**
  * search school by name
  * @param  {string} name - school name
  * @return {array} schools - school list
  */
  searchByName (name) {
    const tmp = []
    this.data.find(item => {
      if (item.name.indexOf(name) !== -1) {
        tmp.push(item)
      }
    })
    return tmp
  }
}
