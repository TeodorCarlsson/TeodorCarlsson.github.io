jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});

jQuery(document).ready(function(){
    $(".hoverable").hover(function(){
      showData(this);
    });
});

function showData(element) {
var data = element.getAttribute("data-tooltip");
/*a.classList.toggle("show");*/
var popup = element.getElementsByClassName("popuptext");
popup[0].innerHTML=data;
popup[0].classList.toggle("show");
}