window.addEventListener("load", function() {

	var top = 0;
	var numberOfStripes = 30;
	var html = "";

	var stripeHeight = 100/numberOfStripes;

	for(var i = 0; i < numberOfStripes; i++) {

		html += "<span class='openTransition' style='height:" + stripeHeight + "%; top:" + top + "%'></span>"
		top += stripeHeight;
	}

	var articles = document.querySelectorAll("main > article");

	for(var i = 0; i < articles.length; i++) {

		articles[i].innerHTML += html;
	}
});