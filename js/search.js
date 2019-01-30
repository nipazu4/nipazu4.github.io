document.getElementById("search").addEventListener("submit", searchQuery);

function searchQuery() {
	var inputvalue = document.getElementById("searchtextinput").value;
	window.location.href = "http://stackoverflow.com";
}