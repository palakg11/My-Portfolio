function goto(a) {
	var url;
	var x =a;
	if(x === 1){
		url = "contact";
	}
	if(x === 2){
		url = "skills";
	}
	if(x === 3){
		url = "about";
	}

	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
	history.pushState(url, null,url+".html");
	window.addEventListener('popstate', function(url){
		xhttp.open("GET",url.state+".html", true);
		xhttp.send();

	})
	xhttp.open("GET",url+".html", true);
	xhttp.send();
	//xhttp.open("GET",url+".html", true);
  //xhttp.send();
}
