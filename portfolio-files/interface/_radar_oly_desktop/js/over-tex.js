$(function(){

	function showContent(x, id)
	{
    var height = document.getElementById(id).offsetHeight;
    $("#" + x).css({"display":"block",
     "top":"0px",
      "z-index":"2",
       "height":height + "px"});
  }

  function hideContent(x)
  {
  	$("#" + x).css({"display":"block",
  	 "top":"-8000px",
  	  "height":"0px"});
  }

  $("#img_item").hover(
  	function() {showContent("enchant_id", "_item");}
  );
	$("#enchant_id").mouseleave(
		function() {hideContent("enchant_id");}
	);

	$("#img_att").hover(
  	function() {showContent("attribute_id", "_att");}
  );
	$("#attribute_id").mouseleave(
		function() {hideContent("attribute_id");}
	);

	$("#img_aug_1").hover(
  	function() {showContent("aug_id", "_aug");}
  );
  $("#img_aug_2").hover(
  	function() {showContent("aug_id", "_aug");}
  );
	$("#aug_id").mouseleave(
		function() {hideContent("aug_id");}
	);

	$("#img_skill").hover(
  	function() {showContent("skill_id", "_ench");}
  );
	$("#skill_id").mouseleave(
		function() {hideContent("skill_id");}
	);

	$("#img_cycl").hover(
  	function() {showContent("macro_id", "_macro");}
  );
	$("#macro_id").mouseleave(
		function() {hideContent("macro_id");}
	);

	$("#img_pot").hover(
  	function() {showContent("potions_id", "_pots");}
  );
	$("#potions_id").mouseleave(
		function() {hideContent("potions_id");}
	);

	$("#img_party").hover(
  	function() {showContent("party_id", "_party");}
  );
	$("#party_id").mouseleave(
		function() {hideContent("party_id");}
	);

	$("#img_status").hover(
  	function() {showContent("status_id", "_status");}
  );
	$("#status_id").mouseleave(
		function() {hideContent("status_id");}
	);
});