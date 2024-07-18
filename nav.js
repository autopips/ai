
function openNav() {
	document.getElementById("sideMenu")
		.style.width = "300px";	
}

function closeNav() {
	document.getElementById("sideMenu")
		.style.width = "0";
}

function showContent(content) {
	document.getElementById("contentTitle")
		.textContent = content + " page";
		
	closeNav();
}
