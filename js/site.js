/*function log_focus() 
{
	var log=document.getElementById("login")
	if(log.value=='Логин') log.value=''
}
function log_blur() 
{
	var log=document.getElementById("login")
	if(log.value=='') log.value='Логин'
}
function pas_focus() 
{
	var pas=document.getElementById("password")
	if(pas.value=='Пароль') {pas.value=''}
}
function pas_blur() 
{
	var pas=document.getElementById("password")
	if(pas.value=='') {pas.value='Пароль'}
}*/

$(document).ready(function()
{
	if($("#login").val()!='')
	{
		$("#login").prev().text('');
		$("#password").prev().text('');
	}
	$("div > input").focus(
		function(e)
	{
		var clicked = $(e.target),
		clickedId = clicked.attr("id");
		if(clickedId=="login")
		{
		clicked.prev().text('');
		}
		else if(clickedId=="password") {
		clicked.prev().text('');
		}
	});
	$("div > input").blur(
	function(e)
	{
		var clicked = $(e.target),
		clickedId = clicked.attr("id");
		if(clickedId=="login")
		{
		   if(clicked.val()=='') clicked.prev().text('Логин');
		}
		else if(clickedId=="password")
		{
			if(clicked.val()=='') clicked.prev().text('Пароль');
		}
	});
});