# NationalHighSchoolData-cn
National high school data of China
---
# Install

```bash
$ npm install nantion-high-school --save
```

# API

```javascript
import NationalHighSchoolData from 'national-high-school'
```

```javascript
/**
* get all schools
* @return {array} schools - school list
*/
NationalHighSchoolData.schools()
```

```javascript
/**
* get school by school code
* @param  {string | number} code - school code
* @return {object} school - school instance
*/
NationalHighSchoolData.getByCode(code)
```

```javascript
/**
* get schools by area code
* @param  {string | number} areaCode - area code
* @return {array} schools - school list
*/
NationalHighSchoolData.getByAreaCode(areaCode)
```

```javascript
/**
* search school by name
* @param  {string} name - school name
* @return {array} schools - school list
*/
NationalHighSchoolData.searchByName(name)
```
