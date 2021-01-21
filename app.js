import Splitwise from 'splitwise'
import config from './config.js'

const sw = Splitwise({
  consumerKey: config.key,
  consumerSecret: config.secret
})

sw.getCurrentUser().then(console.log) // => { id: ... }

