$('.form__field input').focusout(function(){
    if( !$(this).val().length == "" ) {
      $(this).addClass('filled');
    } else if($(this).val.length == ""){
      $(this).removeClass('filled');
    }
});

$('.form__field textarea').focusout(function(){
    if( !$(this).val().length == "" ) {
      $(this).addClass('filled');
    } else if($(this).val.length == ""){
      $(this).removeClass('filled');
    }
});