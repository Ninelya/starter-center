/*function log_focus() 
{
	var log=document.getElementById("login")
	if(log.value=='�����') log.value=''
}
function log_blur() 
{
	var log=document.getElementById("login")
	if(log.value=='') log.value='�����'
}
function pas_focus() 
{
	var pas=document.getElementById("password")
	if(pas.value=='������') {pas.value=''}
}
function pas_blur() 
{
	var pas=document.getElementById("password")
	if(pas.value=='') {pas.value='������'}
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
		   if(clicked.val()=='') clicked.prev().text('�����');
		}
		else if(clickedId=="password")
		{
			if(clicked.val()=='') clicked.prev().text('������');
		}
	});
});