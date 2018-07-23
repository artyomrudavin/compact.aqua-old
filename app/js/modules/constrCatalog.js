// // Constructor Catalog

(function() {

	var litreVl = $('.litre-vl'),
	formValue = $('#form-value, #modal-value'),
	formOld = $('#form-old'),
	imgConstr = $('.constructor-img'),
	mtextValue = $('#modal-text-value'),
	colVal = $('#col-val'),
	colValPC = $('#col-valPC'),
	bakVal = $('#bak-val'),
	buyBtn = $('.btn.constr-btn.buy-btn'),
	modalBtn = $('.btn.modal-btn'),
	hiddenComment = $('#formBuy [name="DATA[COMMENTS]"]'),
	arrCompl = $('.compl-item'),
	formValueChar = $('#form-value-char');

	$('#litre a').each(function(i) {
		$(this).attr( 'id', 'litr' + i );
	});

	$('#litr3').hide();

	// Litre Btn "Click" Handler

	$(litreVl).on('click', function (e) {

		e.preventDefault();

		$(litreVl).removeClass('active');
		$(this).addClass('active');

		var dataTk = $('a.litre-vl.active').attr('data-tank');

		if ( bakVal.hasClass('active') ) {
			formOld.hide();
			if ( dataTk == 'tenTk' ) {
				formValue.text('2 100₴');
				imgConstr.css({
					background: 'url(/img/constructor/10l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 10л');
				hiddenComment.val('Бак Aquagradus Стандарт на 10л');
			} else if ( dataTk == 'twentyTk' ) {
				formValue.text('2 700₴');
				imgConstr.css({
					background: 'url(/img/constructor/20l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 25л');
				hiddenComment.val('Бак Aquagradus Стандарт на 25л');
			} else if ( dataTk == 'thirtyTk' ) {
				formValue.text('3 200₴');
				imgConstr.css({
					background: 'url(/img/constructor/30l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 35л');
				hiddenComment.val('Бак Aquagradus Стандарт на 35л');
			} else if ( dataTk == 'fiftyTk' ) {
				formValue.text('3 700₴');
				imgConstr.css({
					background: 'url(/img/constructor/50l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 50л');
				hiddenComment.val('Бак Aquagradus Стандарт на 50л');
			};
		} else if ( colValPC.hasClass('active') ) {
			
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
			formOld.show();

			if ( dataTk == 'twentyTk' ) {
				formOld.text('5 490₴');
				formValue.text('5 040₴');
				imgConstr.css({
					background: 'url(/img/constructor/20l+-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат Компакт Плюс с баком на 25л');
				hiddenComment.val('Самогонный аппарат Компакт Плюс с баком на 25л');

			} else if ( dataTk == 'thirtyTk' ) {
				formOld.text('5 990₴');
				formValue.text('5 640₴');
				imgConstr.css({
					background: 'url(/img/constructor/30l+-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат Компакт Плюс с баком на 35л');
				hiddenComment.val('Самогонный аппарат Компакт Плюс с баком на 35л');

			} else if ( dataTk == 'fiftyTk' ) {
				formOld.text('6 590₴');
				formValue.text('6 240₴');
				imgConstr.css({
					background: 'url(/img/constructor/50l+-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат Компакт Плюс с баком на 50л');
				hiddenComment.val('Самогонный аппарат Компакт Плюс с баком на 50л');
			};

		} else {
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
			formOld.show();

			if ( dataTk == 'tenTk' ) {
				formOld.text('4 090₴');
				formValue.text('3 490₴');
				imgConstr.css({
					background: 'url(/img/constructor/10l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 10л');
				hiddenComment.val('Самогонный аппарат с баком на 10л');
			} else if ( dataTk == 'twentyTk' ) {
				formOld.text('4 690₴');
				formValue.text('4 190₴');
				imgConstr.css({
					background: 'url(/img/constructor/20l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 25л');
				hiddenComment.val('Самогонный аппарат с баком на 25л');
			} else if ( dataTk == 'thirtyTk' ) {
				formOld.text('5 190₴');
				formValue.text('4 790₴');
				imgConstr.css({
					background: 'url(/img/constructor/30l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 35л');
				hiddenComment.val('Самогонный аппарат с баком на 35л');
			};
		}
	});

	// Colonna Btn "Click" Handler

	$(colVal).on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('active');
		$('#litre').toggleClass('hide');
		bakVal.removeClass('active');
		formOld.hide();

		if ( colValPC.hasClass('active') ) {
			formValue.text('2 790₴');
			imgConstr.css({
				background: 'url(/img/constructor/pro_big+.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Колонна Aquagradus Компакт Плюс');
			hiddenComment.val('Колонна Aquagradus Компакт Плюс');
		} else {
			formValue.text('1 990₴');
			imgConstr.css({
				background: 'url(/img/constructor/pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Колонна Aquagradus Компакт');
			hiddenComment.val('Колонна Aquagradus Компакт');
		};


		if ( colVal.hasClass('active') ) {
			colVal.text('Аппарат в сборе');
			bakVal.text('Бак отдельно');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить колонну');
			modalBtn.text('Купить колонну');
		} else {
			colVal.text('Колонна отдельно');
			formValue.text('3 490₴');
			formOld.text('4 090₴');
			formOld.show();
			imgConstr.css({
				background: 'url(/img/constructor/10l-pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Самогонный аппарат Компакт с баком на 10л');
			hiddenComment.val('Самогонный аппарат Компакт с баком на 10л');
			$(litreVl).removeClass('active');
			$(litreVl[0]).addClass('active');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4 && i < 9) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
		};

	});

	// Tank Btn "Click" Handler

	$(bakVal).on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('active');
		$('#litre').removeClass('hide');
		colVal.removeClass('active');
		formOld.hide();
		$('#litr0').show();
		$('#litr3').show();
		formValue.text('2 100₴');
		imgConstr.css({
			background: 'url(/img/constructor/10l-nocolumn_big.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'top center'
		});
		mtextValue.text('Бак Aquagradus Стандарт на 10л');
		hiddenComment.val('Бак Aquagradus Стандарт на 10л');
		$(litreVl).removeClass('active');
		$(litreVl[0]).addClass('active');

		if ( bakVal.hasClass('active') ) {
			bakVal.text('Аппарат в сборе');
			colVal.text('Колонна отдельно');

			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				$(val).addClass('hide');
				if ( i > 3 ) {
					return false;
				}
			});
			buyBtn.text('Купить бак отдельно');
			modalBtn.text('Купить бак отдельно');
		} else {
			bakVal.text('Бак отдельно');
			$('#litr3').hide();
			formValue.text('3 490₴');
			formOld.text('4 090₴');
			formOld.show();
			imgConstr.css({
				background: 'url(/img/constructor/10l-pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Самогонный аппарат с баком на 10л');
			hiddenComment.val('Самогонный аппарат с баком на 10л');
			$(litreVl).removeClass('active');
			$(litreVl[0]).addClass('active');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4 && i < 9) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
		};

		
	});

	// Colonna Changer Btn "Click" Handler

	$(colValPC).on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('active');
		bakVal.removeClass('active');

		if ( colVal.hasClass('active') ) {

			$('#litre').addClass('hide');
			bakVal.removeClass('active');
			formOld.hide();

			if ( colValPC.hasClass('active') ) {
				colValPC.text('Колонна Компакт');
				formValue.text('2 790₴');
				imgConstr.css({
					background: 'url(/img/constructor/pro_big+.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Колонна Aquagradus Компакт Плюс');
				hiddenComment.val('Колонна Aquagradus Компакт Плюс');
			} else {
				formValue.text('1 990₴');
				colValPC.text('Колонна Компакт Плюс');
				imgConstr.css({
					background: 'url(/img/constructor/pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Колонна Aquagradus Компакт');
				hiddenComment.val('Колонна Aquagradus Компакт');
			};

		} else {
			$('#litr0').hide();
			$('#litr3').show();

			if ( $('#litr0').hasClass( 'active' ) ) {
				$('#litr0').removeClass( 'active' );
				$('#litr1').addClass('active');
			};

			formOld.text('5 990₴');
			formValue.text('5 640₴');
			imgConstr.css({
				background: 'url(/img/constructor/20l+-pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Самогонный аппарат Компакт Плюс с баком 25л');
			hiddenComment.val('Самогонный аппарат Компакт Плюс с баком 25л');
			if ( colValPC.hasClass('active') ) {
				colValPC.text('Колонна Компакт');
				bakVal.text('Бак отдельно');
				$(arrCompl).removeClass('hide');
				$.each(arrCompl, function(i, val) {
					if ( i > 4) {
						$(val).addClass('hide');
					};
				});
				buyBtn.text('Купить аппарат');
				modalBtn.text('Купить аппарат');
			} else {
				colValPC.text('Колонна Компакт Плюс');
				formValue.text('3 490₴');
				formOld.text('4 090₴');
				formOld.show();
				imgConstr.css({
					background: 'url(/img/constructor/10l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат Компакт с баком на 10л');
				hiddenComment.val('Самогонный аппарат Компакт с баком на 10л');
				$('#litr0').show();
				$('#litr3').hide();
				$(litreVl).removeClass('active');
				$(litreVl[0]).addClass('active');
				$(arrCompl).removeClass('hide');
				$.each(arrCompl, function(i, val) {
					if ( i > 4 && i < 9) {
						$(val).addClass('hide');
					};
				});
				buyBtn.text('Купить аппарат');
				modalBtn.text('Купить аппарат');
			};
		}


		
	});

})();