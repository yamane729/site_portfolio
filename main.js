var swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	loop: true,
	speed: 1000,

	autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    },

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});