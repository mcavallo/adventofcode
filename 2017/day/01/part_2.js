const helpers = require('../../helpers')
const head = require('lodash/fp/head')
const tail = require('lodash/fp/tail')


const input =
  helpers.readFile('./input.txt')


const sumHeads =
  (listA, listB) =>
    head(listA) === head(listB)
      ? parseInt(head(listA)) * 2
      : 0


const traverseSum =
  (total, listA, listB) =>
    listA.length && listB.length
      ? traverseSum(
          total + sumHeads(listA, listB),
          tail(listA),
          tail(listB)
        )
      : total


const calculate =
  input => {
    let half = text.length / 2
    return traverseSum(0, input.slice(0, half), input.slice(half))
  }


console.log(calculate(input))
