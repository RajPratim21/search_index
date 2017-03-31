//passing the path for index file                     
var options = {indexPath: 'My_index'}
var SearchIndex = require('search-index')
SearchIndex(options, function(err, index) {
  //do stuff with index

  const JSONStream = require('JSONStream')
  const fs = require('fs')
  //reading from json file and preparinf the dara.
  //json data is in the form 
  /*
      {
        title:
        paragraph: {
                      context:
                      question:{....}
                      answer:  {.....}
                    }
      }

      convering the above json format into
        {
          _id: 
          context:
        }

  */
  fs.readFile('./train-v1.1.json', function (err, data) {
  if (err) throw err;

  var raw = JSON.parse(data);
  var questions = raw.data.map(function (q) {
   i = i+1;
      ans = q.paragraphs.map(function(r){
        //console.log(r.context)
          return {
            context: (r.context)
          }
      });
   
    return {
      id: i.toString(),
      title: q.title,
      context: JSON.parse(JSON.stringify(ans)),
    };
  });
  var i=0, j=0,k=0;
  var jsonArr = [];
  //here must be noted data must be fetched into batches not like written here.
  for(i=0;i<questions.length;i++)
  {
    for(j=1;j<questions[i].context.length;j++)
    {
      k++;
      jsonArr.push({
        _id: k.toString(),
        context: questions[i].context[j].context
      });
      
    }
  }
  //console.log(jsonArr)

  //adding the data to the index
  index.add(jsonArr)

  });

});
