
$(':header').addClass('headline');//selects all h1-h6
$('li:lt(3)').hide().fadeIn(1500);//selects 1st 3 list items hide fade
$('li').on('click', function() { 
  $(this).remove();//event listener click remove
});

$('li[id!="one"]').hide().delay(500).fadeIn(1400);
$('li:first-child').addClass('next'); 
$('li.priority').addClass('highlight');

$(function(){
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');
    
    $newItemButton.show(); //when pg loads shows the new item button
    $newItemForm.hide();  //when pg loads hides the form
    
    $('#showForm').on('click', function(){
        $newItemButton.hide(); 
        $newItemForm.show(); 
    });
    
    $newItemForm.on('submit', function(e){
        e.preventDefault(); 
        var newText = $textInput.val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show(); 
        $textInput.val(''); //contents emptied
    });
});

