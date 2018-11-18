<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once 'PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/src/SMTP.php';
require_once 'PHPMailer/src/Exception.php';

if (isset($_POST['name']) && 
	isset($_POST['from']) && 
	isset($_POST['msg']))
{
    if (filter_var($_POST['from'], FILTER_VALIDATE_EMAIL))
    {
    	SendMsg($_POST['from'], $_POST['msg'], $_POST['name']);
    	$data = array(
    		'message_en' => 'Message has been sent!',
    		'message_ru' => 'Сообщение отправлено!'
    	);
    	header('Content-Type: application/json');
    	echo json_encode($data);
    	exit;
	} 
	else
	{
		$data = array(
			'message_en' => 'Wrong E-Mail!',
    		'message_ru' => 'Неверный E-Mail!'
		);
		header('Content-Type: application/json');
    	echo json_encode($data);
    	exit;
	} 
}
else
{
	echo "<script type='text/javascript'>alert('Error!');</script>";
    exit;
}

function SendMsg($from, $msg, $name)
{
	//Create a new PHPMailer instance
	$mail = new PHPMailer;

	//Tell PHPMailer to use SMTP
	$mail->isSMTP();

	//Enable SMTP debugging
	// 0 = off (for production use)
	// 1 = client messages
	// 2 = client and server messages
	$mail->SMTPDebug = 0;

	//Set the hostname of the mail server
	$mail->Host = 'smtp.gmail.com';

	//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
	$mail->Port = 465;

	//Set the encryption system to use - ssl (deprecated) or tls
	$mail->SMTPSecure = 'ssl';

	//Whether to use SMTP authentication
	$mail->SMTPAuth = true;

	$mail->isHTML();

	//Username to use for SMTP authentication - use full email address for gmail
	$mail->Username = "merc.4423@gmail.com";
	//Password to use for SMTP authentication
	$mail->Password = "pEh4s05DyM";

	//Set who the message is to be sent from
	$mail->setFrom($from);

	//Set the subject line
	$mail->Subject = 'Interface by DEADZ';

	//Set the mail text
	$mail->Body = $msg; //Change this for Message

	//Set who the message is to be sent to
	$mail->addAddress('merc.l33t@gmail.com', 'DEADZ');
	$mail->addReplyTo($from, $name); //Change this for Email and Name

	$mail->Send();
}

?>