var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var showLocation = require('./views/location.hbs')

console.log('this is the newer page')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'
var target = document.getElementsByTagName('main')[0]
target.innerHTML = showLocation()


function updateISS() {

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }
  console.log("Button was pressed") 
  // In case you're curious
  console.log(data.body) // FYI: data.body is a string
  var myData = JSON.parse(data.body)

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = showLocation(myData)
})
}

var findISS = document.getElementById('iss')

findISS.addEventListener('click', updateISS)
