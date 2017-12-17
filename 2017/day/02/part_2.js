const helpers = require('../../helpers')
const flow = require('lodash/fp/flow')
const head = require('lodash/fp/head')
const identity = require('lodash/fp/identity')
const map = require('lodash/fp/map')
const reduce = require('lodash/fp/reduce')
const reverse = require('lodash/fp/reverse')
const sortBy = require('lodash/fp/sortBy')
const sum = require('lodash/fp/sum')
const tail = require('lodash/fp/tail')


const input =
  helpers.readLines('./input.txt')


const sumDivisible =
  num =>
    (total, den) =>
      num % den === 0
        ? total + (num / den)
        : total


const reduceDivisible =
  list =>
    reduce(sumDivisible(head(list)), 0, tail(list))


const traverseSum =
  (total, list) =>
    list.length > 1
      ? traverseSum(
          total + reduceDivisible(list),
          tail(list)
        )
      : total


const lineChecksum =
  flow(
    helpers.intColumns,
    sortBy(identity),
    reverse,
    columns => traverseSum(0, columns)
  )


const compute =
  flow(
    map(lineChecksum),
    sum
  )


console.log(compute(input));
