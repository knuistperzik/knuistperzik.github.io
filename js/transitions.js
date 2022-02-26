function toHome() {
	document.getElementById("logo").style.display = "block";
	document.getElementById("projects").style.display = "none";
	document.getElementById("projects_wuppo").style.display = "none";
	document.getElementById("projects_wuppobff").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("bgoff").style.opacity = "0";
	document.getElementById("bgoff2").style.opacity = "0";
	document.getElementById("body1").style.opacity = "1";
	document.getElementById("body2").style.opacity = "0";
}

function toProjects() {
	document.getElementById("logo").style.display = "none";
	document.getElementById("projects").style.display = "block";
	document.getElementById("projects_wuppo").style.display = "none";
	document.getElementById("projects_wuppobff").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("bgoff").style.opacity = "1";
	document.getElementById("bgoff2").style.opacity = "0";
	document.getElementById("body1").style.opacity = "0";
	document.getElementById("body2").style.opacity = "1";
}

function toProjectsWuppo() {
	document.getElementById("logo").style.display = "none";
	document.getElementById("projects").style.display = "none";
	document.getElementById("projects_wuppo").style.display = "block";
	document.getElementById("projects_wuppobff").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("bgoff").style.opacity = "1";
	document.getElementById("bgoff2").style.opacity = "0";
	document.getElementById("body1").style.opacity = "0";
	document.getElementById("body2").style.opacity = "1";
}

function toProjectsWuppoBFF() {
	document.getElementById("logo").style.display = "none";
	document.getElementById("projects").style.display = "none";
	document.getElementById("projects_wuppo").style.display = "none";
	document.getElementById("projects_wuppobff").style.display = "block";
	document.getElementById("info").style.display = "none";
	document.getElementById("bgoff").style.opacity = "1";
	document.getElementById("bgoff2").style.opacity = "0";
	document.getElementById("body1").style.opacity = "0";
	document.getElementById("body2").style.opacity = "1";
}

function toInfo() {
	document.getElementById("logo").style.display = "none";
	document.getElementById("projects").style.display = "none";
	document.getElementById("projects_wuppo").style.display = "none";
	document.getElementById("projects_wuppobff").style.display = "none";
	document.getElementById("info").style.display = "block";
	document.getElementById("bgoff").style.opacity = "0";
	document.getElementById("bgoff2").style.opacity = "1";
	document.getElementById("body1").style.opacity = "0";
	document.getElementById("body2").style.opacity = "1";
}