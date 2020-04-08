$(document).ready(function(){
  // alert('Ciao');

  $('#input-text').keyup(function () {
      var text = $('#input-text').val();
      // console.log(text);
      $('h1').text(text);
  })

  $('.badge').click(function () {
    $(this).parent('h2').next('p').toggle();
  })

  $('#button-todo').click(function () {
     var text = $('#input-todo').val();
     var li = ' <li class="list-group-item">' + text + '<span class="delete">X</span></li>';
     $('#todo-list').append(li);
  })
  
  $(document).on('click', '.delete', function () {
    $(this).parent('li').remove();
  });


});