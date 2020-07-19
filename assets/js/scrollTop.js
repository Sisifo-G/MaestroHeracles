$(document).ready(function(){
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
            $('.whatsapp-icon').css('display', 'block');            
            $('.whatsapp-icon').animate({
                opacity: '1'
            }, 300);
		} else {            
            $('.whatsapp-icon').animate({
                opacity: '0',
            }, 300);
            $('.whatsapp-icon').css('display', 'none');
		}
    });
});