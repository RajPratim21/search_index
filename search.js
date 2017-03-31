var options = {indexPath: 'My_index'}
//var options = {} //put the startup options you want here
var SearchIndex = require('search-index')
SearchIndex(options, function(err, index) {

var t0 = new Date().getTime();

//searching in the index
index.search({"query": {AND: {"context":[ "feature" ]}}},
 function(err, results) {
        console.log('total hits: ' + results.totalHits)
        var t1 = new Date().getTime();
        console.log((t1-t0)+' milliseconds')
    
        //return callback(err, results)
      })

});
