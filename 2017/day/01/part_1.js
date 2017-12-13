const helpers = require('../../helpers')
const flow = require('lodash/fp/flow')
const head = require('lodash/fp/head')
const last = require('lodash/fp/last')
const map = require('lodash/fp/map')
const sum = require('lodash/fp/sum')


const input =
  helpers.readFile('./input.txt')


const findMatches =
  text =>
    text.match(/(\d)\1{1,}/g)


const mapValues =
  map(match =>
    parseInt(head(match)) * (match.length - 1)
  )


const addExtremes =
  total =>
    head(input) === last(input)
      ? total + parseInt(head(input))
      : total


const calculate =
  flow(
    findMatches,
    mapValues,
    sum,
    addExtremes
  )


console.log(calculate(input))
