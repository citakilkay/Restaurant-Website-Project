$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $(".smokingClass1").click(function(){
        $(this).css("border", "3px solid gray");
        $(".smokingClass2").css("border-style","none");
    });
     $(".smokingClass2").click(function(){
        $(this).css("border", "3px solid gray");
        $(".smokingClass1").css("border-style","none");
        $
    });

});