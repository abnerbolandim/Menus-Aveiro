$(function () {
	var navbar = $(".navbar-collapse");
	var width = $(window).width();
	$(window).on("resize", function () {
		if ($(this).width() != width) {
			width = $(this).width();
			navbar.collapse("hide");
		}
	});
});

$(document).on("click", function(event){
    var navbar = $(".navbar-collapse");
    var navbarButton = $(".navbar-toggler");

    if (!navbar.is(event.target) && !navbarButton.is(event.target) && navbar.is(":visible")) {
        navbar.collapse("hide");
    }
});



// let tests = document.querySelectorAll('.test');

// window.onscroll = () => {
// 	tests.forEach(sec =>{
// 		let top = window.scrollY;
// 		let offset = sec.offsetTop - 150;
// 		let height = sec.offsetHeight;

// 		if(top >= offset && top < offset + height){
// 			sec.classList.add('show-animate');
// 			console.log ('aq');
// 		} 
// 		else{
// 			sec.classList.remove('show-animate');
// 		}
// 	})
// }

