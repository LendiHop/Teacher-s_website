$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});
/*Слайдер*/
	$('.sl').slick({
		autoplay: true,
		autoplaySpeed: 6000,
		cssEase: 'ease-in',
		dots: true
	});

//Мега-меню и мобайл меню
		$(".sf-menu").superfish({
			delay: 200,
			speed: "fast",
			cssArrows: false
		})
		.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
		$("#mobile-menu").find("*").attr("style", "");
		$("#mobile-menu").children("ul").removeClass("sf-menu")
 
		.parent().mmenu({
		extensions : ["effect-menu-zoom", "effect-panels-zoom",'theme-white', 'pagedim-black'],
		navbar: {
			title: "Menu",
		},
			navbars: [
			{
				position: "top",
				content: ["searchfield"]
				},
			{
				position: "bottom",
				content: [
					"<a class='fa fa-envelope' href='https://www.google.com/intl/ru/gmail/about/'></a>",
					"<a class='fa fa-odnoklassniki' href='https://ok.ru/'></a>",
					"<a class='fa fa-vk' href='https://vk.com/'></a>"
									]
							}],
			searchfield: {
				noResults: "Nic nie znaleziono",
				placeholder: "Wyszukiwana fraza"
			}
	});

 //Кнопка Button к мобайл меню
		$(".toggle-mnu").click(function() {
		$(this).addClass("on");
	});

	var api = $("#mobile-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Obowiazkowo przeczytam twoje powiadomienie.");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});