const fetch = require('node-fetch');
console.log(process.argv); // enter data in month day format
var date = process.argv.slice(2);
var month = date[0]
var day = date[1]
fetch(`http://history.muffinlabs.com/date/${month}/${day}`)
    .then(res => res.json())
    .then(data => {
        console.log("Events")
        console.log(data.data.Events);
        console.log("Births")
        console.log(data.data.Births);
        console.log("Deaths")
        console.log(data.data.Deaths);
    });