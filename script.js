var firstButton = document.getElementById('myButton');
var secondButton = document.getElementById('button2');
var thirdButton = document.getElementById('button3');
var fourthButton = document.getElementById('button4');

$(secondButton).hide();
$(thirdButton).hide();
$(fourthButton).hide();


    $(firstButton).hover(function(){$(this).fadeOut("slow")});

  firstButton.addEventListener('click',function(){
    $( this ).hide(  );
    $(secondButton).show();
  },false)

  secondButton.addEventListener('click',function(){
    $( this ).hide(  );
    $(thirdButton).show();
  },false)

  thirdButton.addEventListener('click',function(){
    $( this ).hide(  );
    $(fourthButton).show();
  },false)
