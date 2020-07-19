$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);

            $('.whatsapp-icon').css('display', 'block');            
            $('.whatsapp-icon').animate({
                opacity: '1'
            }, 300);
		} else {
            $('.ir-arriba').slideUp(300);
            
            $('.whatsapp-icon').animate({
                opacity: '0',
            }, 300);
            $('.whatsapp-icon').css('display', 'none');
		}
    });
});