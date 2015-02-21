var http = require('http');
var bl = require('bl');
var responses = [];
var count = 0;

function printResponses() {
  for (var i = 0; i < 3; i++) {
    console.log(responses[i]);
  }
}

function httpGet (i) {
  http.get(process.argv[2 + i], function(res) {
    res.pipe(bl(function(err, data) {
      if (err)
        return console.log(err)

      responses[i] = data.toString();
      count++;

      if (count == 3) 
        printResponses();
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
}