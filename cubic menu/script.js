
$(function(){
	var menus=$('menu.social li a'),
		dly=100,
		due=300;
	menus.each(function(){
		var that=this;
		setTimeout(function(){
			$(that).animate({
				top:-20
			},due)
		},dly+=200);
		$(that).mouseover(function  () {
			$(that).css({
				top:-10,				
				animation:anim1345954935609 5s
			})
		});
		$(that).mouseout(function  () {
			$(that).animate({
				top:-20

			},100,'swing')
		})

	
	});

});




