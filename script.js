//
//$("nav div").click(function() {
//    $("ul").slideToggle();
//    $("ul ul").css("display", "none");
//});
//$("ul li").click(function() {
//  $("ul ul").slideUp();
//  
//  $(this).find('ul').slideToggle();
//    
//});
//$(window).resize(function(){
//    if($(window).width() > 768){
//        $("ul").removeAttr('style');
//    }
//}
//
//);
 

var open = document.getElementById("content4");
var nav = document.getElementById("sublist");

function openNav() {
 nav.style.display="block";
 document.getElementById("down").style.display="none";
document.getElementById("up").style.display="inline";
    document.getElementById("up").style.marginLeft="-1.5%";
    
}
//if (sublist.style.display="block"){
//    closeNav();
//    function closeNav() {
//    nav.style.display ="none";
//   
//}
//}
function closeNav() {
    nav.style.display ="none";
    document.getElementById("down").style.display="block";
    document.getElementById("down").style.float="right";
    document.getElementById("up").style.display="none";
   
}