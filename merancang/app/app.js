muat_gambar = function(){
	item = stok[Math.floor(Math.random()*stok.length)];
	$('.desain').attr('src', 'stok/' + item)
}

muat_gambar()

$('img').click(function(){
	muat_gambar()
})

$('.top').click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 700)
})

// $('.container-desain').height($(window).height() - 50)