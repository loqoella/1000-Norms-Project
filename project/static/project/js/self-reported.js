function fun(alt, n)
{
	var x = document.getElementById(alt);
	x.style.display = (x.style.display == 'none')?'block':'none';
	var name = "up_pic" + n;
	var imgObj = document.getElementById(name);
	var Flag=(imgObj.getAttribute("src",2)=="images/up.png")
	imgObj.src=Flag?"images/down.png":"images/up.png";
}
