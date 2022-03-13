// Adding alert to submit button
$("button#sub").click(function(event) {
    var names = document.getElementById('names').value;
    alert('Thank you ' + names + ', Your message has been received. ');
    event.preventDefault();
});

// Clearing form
$("button").on('click', function(){
  $('form').each(function(){
    this.reset();
  });
});

// Adding toggle to design
$('.design').on('click', function(e) {
  $('#design-text').toggle().show(); //you can list several class names 
  e.preventDefault();
});
