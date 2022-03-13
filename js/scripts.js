// Adding alert to submit button
$("button").click(function(event) {
    var names = document.getElementById('names').value;
    alert('Thank you, ' + names + ' Your message has been received. ');
    event.preventDefault();
});

// Clearing form
$("button").on('click', function(){
  $('form').each(function(){
    this.reset();
  });
});