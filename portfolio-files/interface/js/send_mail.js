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
			alert("Name empty!");
			return;
		} 
		if (WebMail === '' )
		{
			//$('#Data_Mail').css("background","#910000");
			alert("E-Mail empty!");
			return;
		}
		if (WebMsg === '')
		{
			//$('#Data_Msg').css("background","#910000");
			alert("Message empty!");
			return;
		}

		//console.log('all fine');

		$.ajax({
			type: "POST",
			url: "../ContactMe.php",
			data: { name: WebName, from: WebMail, msg: WebMsg }
		}).done(function( msg ) 
		{
            switch(msg.message_en)
            {
            	case 'Message has been sent!':
            		$('#btnSend').addClass('btn-send');
            		$('#btnSend').text('SUCCESS');
            	break;
            	case 'Wrong E-Mail!':
            		alert( msg.message_en );
            	break;
            }   
		});  
	});
});