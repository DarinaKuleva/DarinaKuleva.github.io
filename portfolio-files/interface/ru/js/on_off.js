$(document).ready(function () {
	var list = document.getElementsByTagName("TD");
	var idx;
	for(idx = 0; idx < list.length; idx++) 
	{
		if (list[idx].innerHTML === "ДА")
		{
			list[idx].style.color = "#00FF00";
		} else if (list[idx].innerHTML === "НЕТ")
		{
			list[idx].style.color = "#FF0000";
		}
	}
});