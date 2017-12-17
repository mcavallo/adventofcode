const fs = require('fs')
const flow = require('lodash/fp/flow')
const split = require('lodash/fp/split')
const map = require('lodash/fp/map')


const readFile =
  filePath =>
    fs.readFileSync(filePath, {
      encoding: 'utf8'
    })
    .trim()


const readLines =
  flow(
    readFile,
    split('\n')
  )


const intColumns =
  flow(
    split('\t'),
    map(parseInt)
  )


module.exports = {
  readFile,
  readLines,
  intColumns
}
