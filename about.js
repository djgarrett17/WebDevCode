$(document).ready(function(){
    $(".aboutcontainer").hide();
  });
  
$(".clickhere").click(function(){
    $(".aboutcontainer").show();
  });

$(".clickhere").click(function(){
    $(".clickhere").hide();
  });

$(".closex").click(function(){
    $(".aboutcontainer").hide();
  });

$(".closex").click(function(){
    $(".clickhere").show();
  });


$(".clickdiv").animate({left: '45%'},1850);

// $(".clickhere").hover(function(){
//     $(".aboutcontainer").hide(500);
//   });




