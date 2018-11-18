$(document).ready( function() {
	window.onscroll = function(ev) {
	  if ((window.innerHeight + window.scrollY + 10) >= document.body.scrollHeight) {
		$( "#btnBuy" ).addClass("color");
		$( "#btnServ" ).addClass("color-text");
		$( "#btnUpd" ).addClass("color-text");
	  }
	};
});