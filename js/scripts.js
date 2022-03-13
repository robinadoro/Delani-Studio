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
$('.design').click(function(e) {
  $('#design').slideToggle(800);
  $('#design-text').slideToggle(1000);

  e.preventDefault();
});

// Adding toggle to development
$('.development').on('click', function(e) {
  $('.devpmt').slideToggle(800); 
  $('#development').slideToggle(1000); 
  e.preventDefault();
});

// Adding toggle to product
$('.product').on('click', function(e) {
  $('.prod').slideToggle(800); 
  $('#product').slideToggle(1000); 
  e.preventDefault();
});


