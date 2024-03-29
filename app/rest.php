<?
// CRM server conection data
define('CRM_HOST', 'aquagradus.bitrix24.ua'); // your CRM domain name
define('CRM_PORT', '443'); // CRM server port
define('CRM_PATH', '/crm/configs/import/lead.php'); // CRM server REST service path

// CRM server authorization data
define('CRM_LOGIN', 'serg.adm.bitrix24@gmail.com'); // login of a CRM user able to manage leads
define('CRM_PASSWORD', 'sergpass2018'); // password of a CRM user
// OR you can send special authorization hash which is sent by server after first successful connection with login and password
//define('CRM_AUTH', 'e54ec19f0c5f092ea11145b80f465e1a'); // authorization hash

/********************************************************************************************/

// POST processing
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$leadData = $_POST['DATA'];

	// get lead data from the form
	$postData = array(
		'TITLE' => $leadData['TITLE'],
		'NAME' => $leadData['NAME'],
		'PHONE_MOBILE' => $leadData['PHONE_MOBILE'],
        'EMAIL_WORK' => $leadData['EMAIL_WORK'],
        'COMMENTS' => $leadData['COMMENTS'],
        'SOURCE_ID' => $leadData['SOURCE_ID'],
	);

	// append authorization data
	if (defined('CRM_AUTH'))
	{
		$postData['AUTH'] = CRM_AUTH;
	}
	else
	{
		$postData['LOGIN'] = CRM_LOGIN;
		$postData['PASSWORD'] = CRM_PASSWORD;
	}

	// open socket to CRM
	$fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
	if ($fp)
	{
		// prepare POST data
		$strPostData = '';
		foreach ($postData as $key => $value)
			$strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);

		// prepare POST headers
		$str = "POST ".CRM_PATH." HTTP/1.0\r\n";
		$str .= "Host: ".CRM_HOST."\r\n";
		$str .= "Content-Type: application/x-www-form-urlencoded\r\n";
		$str .= "Content-Length: ".strlen($strPostData)."\r\n";
		$str .= "Connection: close\r\n\r\n";

		$str .= $strPostData;

		// send POST to CRM
		fwrite($fp, $str);

		// get CRM headers
		$result = '';
		while (!feof($fp))
		{
			$result .= fgets($fp, 128);
		}
		fclose($fp);

		// cut response headers
		$response = explode("\r\n\r\n", $result);

		$output = '<pre>'.print_r($response[1], 1).'</pre>';
	}
	else
	{
		echo 'Connection Failed! '.$errstr.' ('.$errno.')';
	}
}
else
{
	$output = '';
}

$mailData = $_POST['DATA'];

	$postmailData = array(
		'САЙТ ' => $mailData['SOURCE_ID'],
		'ТЕМА ' => $mailData['TITLE'],
		'ТЕЛЕФОН ' => $mailData['PHONE_MOBILE'],
		'ИМЯ ' => $mailData['NAME'],
		'EMAIL ' => $mailData['EMAIL_WORK'],
		'КОММЕНТАРИИ ' => $mailData['COMMENTS'],
	);

$strmailPostData = '';
		foreach ($postmailData as $key => $value)
			$strmailPostData .= ($strmailPostData == '' ? '' : '').$key.'= '.$value."\r\n";

$recepient = "aquagradus@gmail.com";
$sitename = "compact.aquagradus.in.ua";

$pagetitle = "Новая заявка \"$sitename\"";
mail($recepient, $pagetitle, $strmailPostData, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>