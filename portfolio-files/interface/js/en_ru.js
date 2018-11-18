$(function(){
	// Initially disable language switching button.
	$('#switch-lang').css({'pointer-events':'none', 'cursor':'default'}).attr('disabled','disabled');
	function langButtonListen() 
	{
		$('#switch-lang').click(function (event) 
		{
			event.preventDefault();
			$('[lang="ru"]').toggle();
			$('[lang="en"]').toggle();
			// Switch cookie stored language.
			if (Cookies.get('lang') === 'en') 
			{
				Cookies.set('lang', 'ru', { expires: 14 });
			} else 
			{
				Cookies.set('lang', 'en', { expires: 14 });
			}
		});
		// Enable lang switching button.
		$('#switch-lang').css({'pointer-events':'auto', 'cursor':'pointer'}).removeAttr('disabled');
	}
	// Check if language cookie already exists.
	if (Cookies.get('lang')) {
		var lang = Cookie.get('lang');
		if (lang === 'en') 
		{
			$('[lang="ru"]').hide();
			langButtonListen();
		} else 
		{
			$('[lang="en"]').hide();
			langButtonListen();
		}
	} else
	{
		$('[lang="ru"]').hide();
        Cookies.set('lang', 'en', { expires: 14 });
        langButtonListen();
	}
});