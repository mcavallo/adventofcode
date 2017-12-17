const helpers = require('../../helpers')
const flow = require('lodash/fp/flow')
const map = require('lodash/fp/map')
const max = require('lodash/fp/max')
const min = require('lodash/fp/min')
const sum = require('lodash/fp/sum')


const input =
  helpers.readLines('./input.txt')


const lineChecksum =
  flow(
    helpers.intColumns,
    vals => max(vals) - min(vals)
  )


const compute =
  flow(
    map(lineChecksum),
    sum
  )


console.log(compute(input));
