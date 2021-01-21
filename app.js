const Splitwise = require('splitwise')
const sw = Splitwise({
  consumerKey: 'your key here',
  consumerSecret: 'your secret here'
})

sw.getCurrentUser().then(console.log) // => { id: ... }
//
