exports = module.exports = function module(options) {
  // get environment
  var env = process.env.NODE_ENV || 'development'

  // get options
  var opts = options || {}

  // get log option
  var log = opts.log === undefined
    ? env !== 'test'
    : opts.log

  if (typeof log !== 'function' && typeof log !== 'boolean') {
    throw new TypeError('option log must be function or boolean')
  }

  // default logging using console.error
  if (log === true) {
    log = function logerror(err, str) {
      console.error(str)
    }
  }

  return function module(err, req, res, next){

      //YOUR CODE HERE

  }
};