# NationalHighSchoolData-cn
> National high school data of China

# Install

```bash
$ npm install nantion-high-school --save
```

# Use

```javascript
import NationalHighSchoolData from 'national-high-school'
```

# API
- Get all schools

```javascript
/**
* get all schools
* @return {array} schools - school list
*/
NationalHighSchoolData.schools()
```

- Get school by school code

```javascript
/**
* get school by school code
* @param  {string || number} code - school code
* @return {object} school - school instance
*/
NationalHighSchoolData.getByCode(code)
```

- Get school by area code

```javascript
/**
* get schools by area code
* @param  {string || number} areaCode - area code
* @return {array} schools - school list
*/
NationalHighSchoolData.getByAreaCode(areaCode)
```
- Search school by name

```javascript
/**
* search school by name
* @param  {string} name - school name
* @return {array} schools - school list
*/
NationalHighSchoolData.searchByName(name)
```
