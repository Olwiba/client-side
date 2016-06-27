var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://localhost:3000/food/'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  console.log(data.body) // FYI: data.body is a string

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: 'Space'})
})
