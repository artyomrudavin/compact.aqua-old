// Characteristics Control

(function() {

	var litreVal = $('.litre-val'),
	bkVal = $('.bk-val'),
	colValP = $('.col-valP'),
	charImg = $('.char-img img'),
	weight = $('#weight'),
	speed = $('#speed'),
	diam = $('#diam'),
	inTank = $('#inTank'),
	cleanSpirt = $('#cleanSpirt'),
	inside = $('#inside'),
	insideButle = $('#insideButle'),
	formCharValue = $('#modal-formChar-value'),
	formOldChar = $('#form-old-char'),
	charFormCum = $('#char-form-cum'),
	hidCharComAdd = $('#formCharMod [name="DATA[COMMENTS]"]'),
	tenTankL = $('#tens'),
	twentyTankL = $('#twenty'),
	thirdTankL = $('#third'),
	fiftyTankL = $('#fifty'),
	formValueChar = $('#form-value-char');

	var tenTank = {
		urlA: 'img/10/10.jpg',
		urlT: 'img/10/tank-10.jpg',
		weightA: '6 кг',
		weightT: '4 кг',
		inTank: '8 л',
		cleanSpirt: '0.8 л',
		inside: '2.0 л',
		insideButle: '4 бутылок по 0.5',
		oldPrice: '4 090₴',
		newPrice: '3 490₴',
		tankPrice: '2 100₴',
		appName: 'AquaGradus Компакт 10 л',
		tankName: 'Испарительная емкость 10 л'
	};

	var twentyTank = {
		urlA: 'img/20/20.jpg',
		urlP: 'img/20/20P.jpg',
		urlT: 'img/20/tank-20.jpg',
		weightA: '7 кг',
		weightP: '8 кг',
		weightT: '5 кг',
		inTank: '20 л',
		cleanSpirt: '2 л',
		inside: '5.0 л',
		insideButle: '10 бутылок по 0.5',
		oldPrice: '4 690₴',
		newPrice: '4 190₴',
		oldPricePlus: '5 490₴',
		newPricePlus: '5 040₴',
		tankPrice: '2 700₴',
		appName: 'AquaGradus Компакт 25 л',
		appNameP: 'AquaGradus Компакт Плюс 25 л',
		tankName: 'Испарительная емкость 25 л'
	};

	var thirtyTank = {
		urlA: 'img/30/30.jpg',
		urlP: 'img/30/30P.jpg',
		urlT: 'img/30/tank-30.jpg',
		weightA: '9 кг',
		weightP: '10 кг',
		weightT: '7 кг',
		inTank: '30 л',
		cleanSpirt: '3 л',
		inside: '7.5 л',
		insideButle: '15 бутылок по 0.5',
		oldPrice: '5 190₴',
		newPrice: '4 790₴',
		oldPricePlus: '5 990₴',
		newPricePlus: '5 640₴',
		tankPrice: '3 200₴',
		appName: 'AquaGradus Компакт 35 л',
		appNameP: 'AquaGradus Компакт Плюс 35 л',
		tankName: 'Испарительная емкость 35 л'
	};

	var fiftyTank = {
		urlA: 'img/30/30.jpg',
		urlP: 'img/50/50P.jpg',
		urlT: 'img/50/tank-50.jpg',
		weightA: '11 кг',
		weightP: '12 кг',
		weightT: '9 кг',
		inTank: '38 л',
		cleanSpirt: '3.8 л',
		inside: '9.5 л',
		insideButle: '19 бутылок по 0.5',
		oldPrice: '5 190₴',
		newPrice: '4 690₴',
		oldPricePlus: '6 590₴',
		newPricePlus: '6 240₴',
		tankPrice: '3 700₴',
		appName: 'AquaGradus Компакт 50 л',
		appNameP: 'AquaGradus Компакт Плюс 50 л',
		tankName: 'Испарительная емкость 50 л'
	};

	fiftyTankL.hide();

	// Litre 'Click' handler

	$(litreVal).on('click', function (event) {

		event.preventDefault();

		$(this).addClass('active').siblings().removeClass('active');

		var dataTank = $('a.litre-val.active').attr('data-tank');

		if ( bkVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlT') );
			weight.text( eval (dataTank + '.weightT') );
			formOldChar.hide();
			formValueChar.text( eval (dataTank + '.tankPrice') );
			charFormCum.text( eval (dataTank + '.tankPrice') );
			formCharValue.text( eval (dataTank + '.tankName') );
			hidCharComAdd.val( eval (dataTank + '.tankName') );
		} else if ( colValP.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlP') );
			weight.text( eval (dataTank + '.weightP') );
			formOldChar.text( eval (dataTank + '.oldPricePlus') );
			formValueChar.text( eval (dataTank + '.newPricePlus') );
			charFormCum.text( eval (dataTank + '.newPricePlus') );
			formCharValue.text( eval (dataTank + '.appNameP') );
			hidCharComAdd.val( eval (dataTank + '.appNameP') );
		} else {
			charImg.attr('src', eval (dataTank + '.urlA') );
			weight.text( eval (dataTank + '.weightA') );
			formOldChar.show();
			formOldChar.text( eval (dataTank + '.oldPrice') );
			formValueChar.text( eval (dataTank + '.newPrice') );
			charFormCum.text( eval (dataTank + '.newPrice') );
			formCharValue.text( eval (dataTank + '.appName') );
			hidCharComAdd.val( eval (dataTank + '.appName') );
		};
		
		inTank.text( eval (dataTank + '.inTank') );
		cleanSpirt.text( eval (dataTank + '.cleanSpirt') );
		inside.text( eval (dataTank + '.inside') );
		insideButle.text( eval (dataTank + '.insideButle') );

	});



	// Tank 'Click' handler

	$(bkVal).on('click', function (event) {

		event.preventDefault();

		tenTankL.show();
		fiftyTankL.show();

		var dataTank = $('a.litre-val.active').attr('data-tank');

		charImg.attr('src', eval (dataTank + '.urlT') );
		weight.text( eval (dataTank + '.weightT') );
		// $('.carSuh').addClass('hide');
		$(this).toggleClass('active');
		if ( bkVal.hasClass('active') ) {
			$(this).text('Аппарат в сборе');
			formOldChar.hide();
			formValueChar.text( eval (dataTank + '.tankPrice') );
			charFormCum.text( eval (dataTank + '.tankPrice') );
			formCharValue.text( eval (dataTank + '.tankName') );
			hidCharComAdd.val( eval (dataTank + '.tankName') );
		} else if ( colValP.hasClass('active') ) {
			$(this).text('Бак отдельно');
			tenTankL.hide();
			fiftyTankL.show();
			charImg.attr('src', eval (dataTank + '.urlP') );
		} else {
			$(this).text('Бак отдельно');
			tenTankL.siblings().removeClass('active');
			tenTankL.show().addClass('active');
			dataTank = 'tenTank';
			fiftyTankL.hide();
			formOldChar.show();
			formOldChar.text( eval (dataTank + '.oldPrice') );
			formValueChar.text( eval (dataTank + '.newPrice') );
			charFormCum.text( eval (dataTank + '.newPrice') );
			charImg.attr('src', eval (dataTank + '.urlA') );
			weight.text( eval (dataTank + '.weightA') );
			formCharValue.text( eval (dataTank + '.appName') );
			hidCharComAdd.val( eval (dataTank + '.appName') );
		};

	});



	// Colonna Change 'Click' handler

	$(colValP).on('click', function (event) {

		event.preventDefault();

		tenTankL.hide();
		fiftyTankL.show();

		if ( tenTankL.hasClass( 'active' ) ) {
			tenTankL.removeClass( 'active' );
			twentyTankL.addClass('active');
		};

		var dataTank = $('a.litre-val.active').attr('data-tank');

		charImg.attr('src', eval (dataTank + '.urlP') );
		weight.text( eval (dataTank + '.weightT') );
		speed.text( '5 л/час' );
		diam.text( '40 мм (Фланец 91мм")' );
		$(this).toggleClass('active');
		if ( colValP.hasClass('active') ) {
			$(this).text('Компакт');
			bkVal.text('Бак отдельно');
			formOldChar.text( eval (dataTank + '.oldPricePlus') );
			formValueChar.text( eval (dataTank + '.newPricePlus') );
			charFormCum.text( eval (dataTank + '.newPricePlus') );
			formCharValue.text( eval (dataTank + '.appNameP') );
			hidCharComAdd.val( eval (dataTank + '.appNameP') );
		} else {
			$(this).text('Компакт Плюс');
			bkVal.text('Бак отдельно');
			tenTankL.show();
			fiftyTankL.hide();
			formOldChar.show();
			formOldChar.text( eval (dataTank + '.oldPrice') );
			formValueChar.text( eval (dataTank + '.newPrice') );
			charFormCum.text( eval (dataTank + '.newPrice') );
			charImg.attr('src', eval (dataTank + '.urlA') );
			weight.text( eval (dataTank + '.weightA') );
			speed.text( '3 л/час' );
			diam.text( '32 мм (Фланец 91мм")' );
			formCharValue.text( eval (dataTank + '.appName') );
			hidCharComAdd.val( eval (dataTank + '.appName') );
		};

	});

})();