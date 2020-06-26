const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
	indicators: false,
	height: 600,
	duration: 500,
	interval: 2500
});

const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

const tabs = document.querySelectorAll('.tabs');
M.Tabs.init(tabs, {
	swipeable: true
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// materialboxed
const materialBoxed = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBoxed);

const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {
	scrollOffset: 50
});

// active-li
const li = document.querySelectorAll('.activeli');
li.forEach(function(el){
	el.addEventListener('click', function(e){
		li.forEach(function(el){
			el.classList.remove('active');
		});
		el.classList.add('active');
	});
});