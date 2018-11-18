$(function(){
	/*$('#Data_Name').focus(function() {
		if ($('#Data_Name').css("background-color") == 'rgb(145, 0, 0)')
			$('#Data_Name').css("background","#091229");
	});
	$('#Data_Mail').focus(function() {
		if ($('#Data_Mail').css("background-color") == 'rgb(145, 0, 0)')
			$('#Data_Mail').css("background","#091229");
	});
	$('#Data_Msg').focus(function() {
		if ($('#Data_Msg').css("background-color") == 'rgb(145, 0, 0)')
			$('#Data_Msg').css("background","#091229");
	});*/
	$('#btnSend').click(function () 
	{
		var WebName = $('#Data_Name').val();
		var WebMail = $('#Data_Mail').val();
		var WebMsg = $('#Data_Msg').val();

		if (WebName === '')
		{
			//$('#Data_Name').css("background","#910000");
			//console.log('name empty');
			alert("Заполните Имя!");
			return;
		} 
		if (WebMail === '' )
		{
			//$('#Data_Mail').css("background","#910000");
			alert("Заполните E-Mail!");
			return;
		}
		if (WebMsg === '')
		{
			//$('#Data_Msg').css("background","#910000");
			alert("Заполните Сообщение!");
			return;
		}

		//console.log('all fine');

		$.ajax({
			type: "POST",
			url: "https://bymerc.xyz/ContactMe.php",
			data: { name: WebName, from: WebMail, msg: WebMsg }
		}).done(function( msg ) 
		{
            switch(msg.message_ru)
            {
            	case 'Сообщение отправлено!':
            		$('#btnSend').addClass('btn-send');
            		$('#btnSend').text('УСПЕШНО');
            	break;
            	case 'Неверный E-Mail!':
            		alert( msg.message_ru );
            	break;
            }
		});  
	});
});