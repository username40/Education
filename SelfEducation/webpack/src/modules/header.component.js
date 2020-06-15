import $ from 'jquery'

$('<h1 />')
  .text('Jquery')
  .css({
    textAlign: 'center',
    color: 'blue'
  })
  .appendTo($('header'))