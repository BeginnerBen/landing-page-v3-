$(document).ready(function () {
	var _dockPanel;
	var content = document.createElement('div');
	content.innerHTML = "";
	var liststart = document.createElement('ul');
	var listelement1 = document.createElement('li');
	var listelement2 = document.createElement('li');
	listelement1.innerHTML = '<a href="#tabs-1">One</a>';
	listelement2.innerHTML = '<a href="#tabs-2">Two</a>';
	liststart.appendChild(listelement1);
	liststart.appendChild(listelement2);
	var t1 = document.createElement('div');
	var t2 = document.createElement('div');

	t1.id = "tabs-1";
	t2.id = "tabs-2";

	t1.innerHTML = "Tab 1";
	t2.innerHTML = "Tab 2";

	content.appendChild(liststart);
	content.appendChild(t1);
	content.appendChild(t2);

	//main html to append 
	var html = [
		'<div>',
		'<nav class="navbar navbar-default">',

		'<ul class="nav navbar-nav">',
		'<li class="active"><a href="html/home.html"> <button> Home </button></a></li>',
		'<li><a href="html/melbourneSurf.html"><button> Melbourne surf  </button></a></li>',
		'<li><a href="html/californiaSurf.html"><button> california surf  </button></a></li>',
		'<li><a href="html/hawaiiSurf.html"><button> hawaii surf </button></a></li>',
		'</ul>',

		'</nav>',
		'</div>'
	].join('\n');
	$("#navbar1").append(html);
	//$("#navbar2").append(content);
});