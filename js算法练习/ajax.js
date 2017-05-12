var xmlHttp;

function createXMLHttpRequest() {
	if (window.ActiveXObject) {
		xmlHttp = new ActiveXObject('microsoft.xmlhttp');
	} else {
		xmlHttp = new XMLHttpRequest();
	}
}

function handleStateChange() {
	if (xmlHttp.readyState === 4) {
		if (xmlHttp.status === 200) {
			alert("ok");
		}
	}
}

function doSearch() {
	createXMLHttpRequest();
	xmlHttp.onreadystatechange = handleStateChange;
	xmlHttp.open('GET', 'url', true); //传递方式，地址，是否异步
	xmlHttp.send(null);
}

