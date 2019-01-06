document.getElementById("search").addEventListener("submit", searchQuery);

function searchQuery() {
	var inputvalue = document.getElementById("searchtextinput").value;
	window.location.replace("google.com");
}