<?php

$mailData = $_POST['DATA'];

	$postData = array(
		'САЙТ ' => $mailData['SOURCE_ID'],
		'ТЕМА ' => $mailData['TITLE'],
		'ТЕЛЕФОН ' => $mailData['PHONE_MOBILE'],
		'ИМЯ ' => $mailData['NAME'],
		'EMAIL ' => $mailData['EMAIL_WORK'],
		'КОММЕНТАРИИ ' => $mailData['COMMENTS'],
	);

$strPostData = '';
		foreach ($postData as $key => $value)
			$strPostData .= ($strPostData == '' ? '' : '').$key.'= '.$value."\r\n";

$recepient = "leads@aquagradus.com";
$sitename = "standart.aquagradus.com";

$pagetitle = "Новая заявка \"$sitename\"";
mail($recepient, $pagetitle, $strPostData, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");