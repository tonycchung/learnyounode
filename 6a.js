var mymodule = require('./6b');

mymodule(process.argv[2], process.argv[3], function (err, data) {
  if (err)
    console.log(err)

  data.forEach(function (file) {
    console.log(file);
  });
})