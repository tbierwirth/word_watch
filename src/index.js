import $ from 'jquery'

$(document).ready(() => {
  var url = 'https://wordwatch-api.herokuapp.com'
  $.ajax({
    url: url + '/api/v1/top_word',
    method: "GET",
    dataType: 'json',
    success: function(response){
      let word = Object.keys(response.word)[0];
      let count = Object.values(response.word)[0];
      $('.word-count').html(`<h3>Word: ${word} Count: ${count}</h3>`)
    }
  })
})
