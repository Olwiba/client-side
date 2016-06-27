var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var showLocation = require('./views/location.hbs')
console.log('this is the new page')
var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'
var target = document.getElementsByTagName('main')[0]
target.innerHTML = showLocation()
function findISS() {

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log(data.body) // FYI: data.body is a string
  var myData = JSON.parse(data.body)

  console.log(myData)
  console.log('the test : ', myData.name)

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = showLocation(myData)
})
}