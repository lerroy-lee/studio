$(document).ready(function(){
  $("design").click(function(){
$("DESIGN").show();
$("").removeClass();
$("").addClass("DESIGN")
  });
});
$(document).ready(function(){
  $("dev").click(function(){
$("DEVELOPMENT").show();
$("").removeClass();
$("").addClass("DEVELOPMENT")
  });
});
$(document).ready(function(){
  $("product").click(function(){
$("PRODUCTMANAGEMENT").show();
$("").removeClass();
$("").addClass("PRODUCTMANAGEMENT")
  });
});

////
$(document).ready(function () {
  $("#dev-img").click(function () {
      $("#dev-img").toggle('1500').hide('1000');
      $("#DEVELOPMENT").show('1500');
  });
  $("#DEVELOPMENT").click(function () {
      $("#DEVELOPMENT").toggle('1500');
      $("#dev-img").toggle('1500');
  });
});

$(document).ready(function () {
  $("#design-img").click(function () {
      $("#design-img").toggle('1500').hide('1000');
      $("#DESIGN").show('1500');
  });
  $("#DESIGN").click(function () {
      $("#DESIGN").toggle('1500');
      $("#design-img").toggle('1500');
  });
});

$(document).ready(function () {
  $("#product-img").click(function () {
      $("#product-img").toggle('1500').hide('1000');
      $("#PRODUCTMANAGEMENT").show('1500');
  });
  $("#PRODUCTMANAGEMENT").click(function () {
      $("#PRODUCTMANAGEMENT").toggle('1500');
      $("#product-img").toggle('1500');
  });
});

$(document).ready(function () {
  $("#work1").mouseover(function () {
      $("#back0").show();
  }).mouseout(function () {
      $("#back0").hide();
  });
});
$(document).ready(function () {
  $("#work2").mouseover(function () {
      $("#back2").show();
  }).mouseout(function () {
      $("#back2").hide();
  });
});
$(document).ready(function () {
  $("#work3").mouseover(function () {
      $("#back3").show();
  }).mouseout(function () {
      $("#back3").hide();
  });
});
$(document).ready(function () {
  $("#work4").mouseover(function () {
      $("#back4").show();
  }).mouseout(function () {
      $("#back4").hide();
  });
});

$(document).ready(function () {
  $("#work5").mouseover(function () {
      $("#back5").show();
  }).mouseout(function () {
      $("#back5").hide();
  });
  $("#work6").mouseover(function () {
      $("#back6").show();
  }).mouseout(function () {
      $("#back6").hide();
  });
  $("#work7").mouseover(function () {
      $("#back7").show();
  }).mouseout(function () {
      $("#back7").hide();
  });
  $("#work8").mouseover(function () {
      $("back8").show();
  }).mouseout(function () {
      $("#back8").hide();
  });
});

//This doesnt really dispaly the expected result

$(document).ready(function () {
  $("contact us").submit(function (event) {
       event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#mail").val();
      var message = $("textarea#feedback").val();
      if ($("input#name").val() && $("input#mail").val()) {
          alert(name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
          alert("Please enter your name and email!");
      }

  });

});
