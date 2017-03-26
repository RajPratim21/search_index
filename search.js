var options = {indexPath: 'My_index', logLevel: 'info'}
var searchIndex = require('search-index')
var dataset = require('./train-v1.1.json')

searchIndex(options, function(err, si) {
    //si.add(dataset, {}, function(err) {
      if (!err) console.log('indexed!')
      else return callback(err, {})
      console.log('doing a test search...')
      t1 = new Date().getTime();
      si.search({"query": {AND: {"data":["Beyonce married to"]}}}, function(err, results) {
        console.log('results: ' + results.totalHits)
        t2 = new Date().getTime();
        console.log('Time taken by search-index '+ (t2-t1) +' ms');
        //return callback(err, results)
    })
    
  })

