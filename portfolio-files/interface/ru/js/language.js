function ipLookUp () {
	return new Promise(function(resolve, reject){
		$.ajax('https://ipinfo.io/json')
		.then(
			function success(response) {
				//console.log('User\'s Location Data is ', response);
				//console.log('User\'s Country', response.country);
				resolve(response.country);
			},

			function fail(data, status) {
				console.log('Request failed.  Returned status of', status);
				reject("Error");
			}
		);
	});
}

$(document).ready( function() {
	
	var userLang = navigator.language || navigator.userLanguage;
		if (userLang.includes("ru")) {
            window.location.replace("../deadz/ru/");
        }
        else {
            window.location.replace("../deadz/en/");
        }
	
	/*var cookie = Cookies.get('Lang');
	
	if (typeof cookie != 'undefined')
	{
		cookie = cookie.toLowerCase();
		window.location.replace("../deadz/" + cookie + "/");
	} else
	{
		const code = await ipLookUp();
		
		Cookies.set('Lang', code, { expires: 14 });
	
		switch(code)
		{
			case "RU":
			case "UA":
			case "BY":
			case "BLR":
				window.location.replace("../deadz/ru/");
			break;
			default:
				window.location.replace("../deadz/en/");
			break;
		}
	}*/
});