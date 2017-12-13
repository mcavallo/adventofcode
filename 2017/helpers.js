const fs = require('fs')


const readFile =
  filePath =>
    fs.readFileSync(filePath, {
      encoding: 'utf8'
    })
    .trim()


module.exports = {
  readFile
}
