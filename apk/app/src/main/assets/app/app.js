$('.container_desain').height($(document).height() - 50)

muat_gambar = function(){
	item = stok[Math.floor(Math.random()*stok.length)];
	$('.container_desain').css('background-image', 'url("stok/' + item + '")')
}

muat_gambar()

$('.container_desain').click(function(){
	muat_gambar()
})

$('.top').click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 700)
})

$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})