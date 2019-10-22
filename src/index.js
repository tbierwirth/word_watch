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
  $('button').click(function() {
    let input = $('.text-submission > textarea').val()
    let words = input.split(' ')
    $(words).each(function(i, word) {
      let data = { word: { value: word } }
      $.ajax({
        url: url + '/api/v1/words',
        method: "POST",
        data: data,
        success: function(result){
          console.log(result)
        }
      })
    })
  })
})
