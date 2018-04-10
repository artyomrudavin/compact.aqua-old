// Price changer

$(function() {

	function nextMsg(i) {
		if (messages.length == i) {
			i = 0;
		}
		$('#message').html(messages[i]).fadeIn(500).delay(3000).fadeOut(500, function() {
			nextMsg(i + 1);
		});
	};

	var messages = [
	"10л: <span>4 090грн</span>&nbsp;<strong>3 390</strong> грн",
	"20л: <span>4 690грн</span>&nbsp;<strong>4 090</strong> грн",
	"30л: <span>5 190грн</span>&nbsp;<strong>4 690</strong> грн"
	];

	$('#message').hide();

	nextMsg(0);

});

// Modal Control - Book

$(function() {

	var modal = $('#book.modal-mask');

	$('.recipe-btn').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW1' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Catalog

$(function() {

	var modal = $('#catalog.modal-mask');

	$('.buy-btn').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW2' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Catalog

$(function() {

	var modal = $('#char-form-modal.modal-mask');

	$('.buy-btn-char').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW6' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Header

$(function() {

	var modal = $('#header-modal.modal-mask');

	$('#menu .btnHead').on('click', function(e) {
		e.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW3' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - About

$(function() {

	var modal = $('#about-modal.modal-mask');

	$('#aboutBtn').on('click', function(e) {
		e.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW4' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Additionally

$(function() {

	var modal = $('#additionally-modal.modal-mask'),
	addPrice = $('#additionally-modal #modal-value-add'),
	addTextm = $('#additionally-modal #modal-text-add')
	hiddenComAdd = $('#additionally-modal [name="DATA[COMMENTS]"]');
		// console.log(hiddenComAdd);

		$('#carga, #komplOhl, #areom, #rashiga, #popugai, #dioptr, #ugol, #regMosh, #ten').on('click', function(e) {
			e.preventDefault();
		// $(this).addClass('active');
		modal.removeClass('hide');

		if ( $(this).attr('id') == 'carga' ) {
			addPrice.text('1 190₴');
			addTextm.text('Дополнительная царга с сеткой Панченкова');
			hiddenComAdd.val('Дополнительная царга с сеткой Панченкова');
			// console.log('carga');
		} else if ( $(this).attr('id') == 'dioptr' ) {
			addPrice.text('1 590₴');
			addTextm.text('Инновационный диоптр 4 в 1');
			hiddenComAdd.val('Инновационный диоптр 4 в 1');
			// console.log('dioptr');
		} else if ( $(this).attr('id') == 'popugai' ) {
			addPrice.text('690₴');
			addTextm.text('Непрерывный контроль крепости (Попугай)');
			hiddenComAdd.val('Непрерывный контроль крепости (Попугай)');
			// console.log('popugai');
		} else if ( $(this).attr('id') == 'rashiga' ) {
			addPrice.text('710₴');
			addTextm.text('Кольца Рашига 1 кг');
			hiddenComAdd.val('Кольца Рашига 1 кг');
			// console.log('rashiga');
		} else if ( $(this).attr('id') == 'areom' ) {
			addPrice.text('350₴');
			addTextm.text('Набор профессиональных ареометров и мерная колба');
			hiddenComAdd.val('Набор профессиональных ареометров и мерная колба');
			// console.log('areom');
		} else if ( $(this).attr('id') == 'komplOhl' ) {
			addPrice.text('750₴');
			addTextm.text('Комплект охлождения ДеЛюкс');
			hiddenComAdd.val('Комплект охлождения ДеЛюкс');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'ugol' ) {
			addPrice.text('750₴');
			addTextm.text('Угольная колонна AquaGradus');
			hiddenComAdd.val('Угольная колонна AquaGradus');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'regMosh' ) {
			addPrice.text('1 550₴');
			addTextm.text('Регулятор мощности нагрева АГ-2');
			hiddenComAdd.val('Регулятор мощности нагрева АГ-2');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'ten' ) {
			addPrice.text('250₴');
			addTextm.text('Водяной ТЭН для самогонного аппарат');
			hiddenComAdd.val('Водяной ТЭН для самогонного аппарат');
			// console.log('drogi');
		};
	});

		$('.modal-close').on('click', function() {
			modal.addClass('hide');
		});

		$(document).on('click', function(event) {
			if ( event.target.id == 'mW5' ) {
				modal.addClass('hide');
			}
		});

	});

// Date Today

$(function() {

	var dateNow = new Date(),
	todayInner = $('.today');
	// dateNow.toDateString();
	function formatDate(date) {

		var dd = date.getDate();
		if (dd < 10) dd = '0' + dd;

		var mm = date.getMonth() + 1;
		if (mm < 10) mm = '0' + mm;

		return dd + '.' + mm;
	};

	todayInner.text(formatDate(dateNow));
	// console.log(formatDate(dateNow));
});

// Parallax

$(function() {

	$(window).mousemove(function(e) {
		var change;
		var xpos=e.clientX;
		var ypos=e.clientY;
		var left= change*20;
		var  xpos=xpos*2;ypos=ypos*2;
		$('.layer-1').css('top',((80-(ypos/30))+"px"));
		$('.layer-1').css('left',(( 280-(xpos/50))+"px"));

	});

});

// Tab Additionally

$(function() {

	$('.tab-content').hide();

	$('.tablink').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-content').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tablink').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.additionally-goods');

		getWrapper.find('.tab').removeClass('active');
		$(this).closest('.tab').addClass('active');
		getWrapper.find('.tab-content').hide();
		getWrapper.find('.tab-content[data-tab='+dataTab+']').fadeIn('slow');

	});

	$('.tab-close').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.additionally-goods');

		getWrapper.find('.tab-content').fadeOut('fast');
		getWrapper.find('.tab').removeClass('active');

	})

});

// Scroll to

$(function() {

	$('.more a, #menu a, .goto a, .card-block a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 75}, 2000); // анимируем скроолинг к элементу scroll_el

	    if ( $(window).width() < 768 && $(this).hasClass('h-menu') ) {
	    	// console.log(this);
	    	$('.icon').toggleClass('active');
	    	var menu = $('#menu');
	    	menu.slideToggle();
	    };	    
	}
	    return false; // выключаем стандартное действие
	});

});

// Accardeon FAQ

$(function() {

	$('.accordeon .card>.collapse').not(':eq(1)').hide();
	$('.accordeon .card .x-link').not(':eq(1)').addClass('collapsed');

	$('.accordeon .card .x-link').on('click', function(e) {
		e.preventDefault();
		// console.log('click');
		
		var findCollapse = $(this).closest('.card-header').next('.collapse');
		// console.log(findCollapse);

		var findWrapper = $(this).closest('.accordeon');
		// console.log(findWrapper);

		if ( findCollapse.is(':visible') ) {
			findCollapse.slideUp();
			findWrapper.find('.card .x-link').addClass('collapsed');
		} else {
			findWrapper.find('.card>.collapse').slideUp();
			findCollapse.slideDown();
			findWrapper.find('.card .x-link').addClass('collapsed');
			$(this).removeClass('collapsed');
		};

		
	});

});

// Scroll Header

$(function() {

	$(window).scroll(function() {

		var winWidth = $(window).width();

		if ( winWidth > 767 && winWidth < 1090 ) {
			if ( $(this).scrollTop() > 580 ) {
				$('.header-navbar .btnHead').show();
				$('.headChar').hide();
			} else {
				$('.header-navbar .btnHead').hide();
				$('.headChar').show();
			};
		} else if ( winWidth > 767 ) {
			if ( $(this).scrollTop() > 580 ) {
				$('.header-navbar .btnHead').show();
			} else {
				$('.header-navbar .btnHead').hide();
			};
		};

	});

});

// Drag img

$(function() {

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

// Burger bar

$(function() {
	
	$('.icon').on('click', function(e) {
		e.preventDefault();

		$('.icon').toggleClass('active');

		var menu = $('#menu');

		menu.slideToggle();
	});

});

//E-mail & Bitrix Ajax Send

$(function() {

	$("#headerCall, #headerForm, #modalBook, #formBuy, #aboutCall, #formAdd, #question, #char-form, #formBonus, #formCharMod").submit(function() { //Change
		var th = $(this);

		$.ajax({
			type: "POST",
			url: "rest.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			location.href = "http://compact.aquagradus.com/sps/";
		});
		return false;
	});


});

// Phone Mask

$(function() {
	$('[type="tel"]').mask('+389999999999');
});

// Show-hide for tips Btn 

$(function() {

	$('.red-more').on('click', function(e) {
		e.preventDefault();
		
		$('.hide-tip').toggle('slow');
		$(this).text('Свернуть');

		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active');
		} else {
			$(this).text('Больше информации... ');
		};

	});

});

// Timer Settings

$(function() {

	function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2018, 1, 6);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
  	var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
  	// console.log(diff % 1000);
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;

    if ( days < '1' ) {
    	// console.log(days);
    	$('.timer-red').css('color', '#EE4034');
    };

    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
}
setTimeout(update, 0);
}

updater(document.getElementById("days1"),
	document.getElementById("hours1"),
	document.getElementById("minutes1"),
	document.getElementById("seconds1"));

updater(document.getElementById("days2"),
	document.getElementById("hours2"),
	document.getElementById("minutes2"),
	document.getElementById("seconds2"));

// updater(document.getElementById("days3"),
// 	document.getElementById("hours3"),
// 	document.getElementById("minutes3"),
// 	document.getElementById("seconds3"));

});

// Show-Hide for Timer in top

$(function() {
	
	var goTo = $('#goto'),
	sticky = goTo.offset().top,
	timeHeader = $('.time-wrap');

	$(window).scroll(function() {

		var topPos = $(this).scrollTop();

		if ( $(window).width() > 767 ) {
			if ( topPos >= sticky ) {
				timeHeader.removeClass('animateHide');

			} else {
				timeHeader.addClass('animateHide');

			}
		} else {
			if ( topPos >= sticky ) {
				timeHeader.addClass('active');

			} else {
				timeHeader.removeClass('animateHide');
				timeHeader.removeClass('active');
				timeHeader.addClass('animateHideMob');
				$('#time-text').text('Акция: ');
			}
		}

	});

});

// Blinking Bonus on First Plan

$(function() {
	
	setInterval(function() {

		$('.header-bonus').toggleClass('blink');

	}, 1000);

});