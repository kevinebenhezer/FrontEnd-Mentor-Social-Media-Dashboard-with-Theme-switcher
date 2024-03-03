const toggleButton = document.querySelector("input[type=checkbox]");
const facebookCard = document.querySelector(".facebook");
const twitterCard = document.querySelector(".twitter");
const instagramCard = document.querySelector(".instagram");
const youtubeCard = document.querySelector(".youtube");

facebookCard.addEventListener("mouseover", facebookHover);
facebookCard.addEventListener("mouseout", facebookHoverOut);

twitterCard.addEventListener("mouseover", twitterHover);
twitterCard.addEventListener("mouseout", twitterHoverOut);

instagramCard.addEventListener("mouseover", instagramHover);
instagramCard.addEventListener("mouseout", instagramHoverOut);

youtubeCard.addEventListener("mouseover", youtubeHover);
youtubeCard.addEventListener("mouseout", youtubeHoverOut);

toggleButton.addEventListener("click", toggleDarkMode);

function youtubeHover() {
	youtubeCard.style.padding = "0.5rem";
	youtubeCard.style.transition = "250ms";
	youtubeCard.style.cursor = "pointer";
	document.getElementById("card-youtube").style.border = "1px solid red";
	document.getElementById("card-youtube").style.borderRadius = "0.6rem";
}

function youtubeHoverOut() {
	youtubeCard.style.padding = "";
	document.getElementById("card-youtube").style.border = "";
}

//FACEBOOK
function facebookHover() {
	facebookCard.style.padding = "0.5rem";
	facebookCard.style.transition = "250ms";
	facebookCard.style.cursor = "pointer";
	document.getElementById("card-facebook").style.border = "1px solid hsl(208, 92%, 53%)";
	document.getElementById("card-facebook").style.borderRadius = "0.6rem";
}

function facebookHoverOut() {
	facebookCard.style.padding = "";
	document.getElementById("card-facebook").style.border = "";
}

//TWITTER
function twitterHover() {
	twitterCard.style.padding = "0.5rem";
	twitterCard.style.transition = "250ms";
	twitterCard.style.cursor = "pointer";
	document.getElementById("card-twitter").style.border = "1px solid hsl(203, 89%, 53%)";
	document.getElementById("card-twitter").style.borderRadius = "0.6rem";
}

function twitterHoverOut() {
	twitterCard.style.padding = "";
	document.getElementById("card-twitter").style.border = "";
}

//INSTAGRAM
function instagramHover() {
	instagramCard.style.padding = "0.5rem";
	instagramCard.style.transition = "250ms";
	instagramCard.style.cursor = "pointer";
	document.getElementById("card-instagram").style.border = "1px solid hsl(37, 97%, 70%)";
	document.getElementById("card-instagram").style.borderRadius = "0.6rem";
}

function instagramHoverOut() {
	instagramCard.style.padding = "";
	document.getElementById("card-instagram").style.border = "";
}

//YOUTUBE
function youtubeHover() {
	youtubeCard.style.padding = "0.5rem";
	youtubeCard.style.transition = "250ms";
	youtubeCard.style.cursor = "pointer";
	document.getElementById("card-youtube").style.border = "1px solid red";
	document.getElementById("card-youtube").style.borderRadius = "0.6rem";
}

function youtubeHoverOut() {
	youtubeCard.style.padding = "";
	document.getElementById("card-youtube").style.border = "";
}

//DARK MODE
function toggleDarkMode() {
	if (!toggleButton.hasAttribute("checked")) {
		toggleButton.setAttribute("checked", "true");
		light();
	} else {
		toggleButton.removeAttribute("checked");
		dark();
	}
}

function light() {
	document.body.className = "white";
	document.querySelector("h1").style.color = "black";
	document.querySelector("h3").style.color = "hsl(228, 12%, 44%)";
	lightCardBody();
	lightTotalFollowers();
	lightOverviewCardBody();
	lightH4();
	document.querySelector(".attribution").style.color = "black";
}

function dark() {
	document.body.className = "dark";
	document.querySelector("h1").style.color = "white";
	document.querySelector("h3").style.color = "white";
	darkCardBody();
	darkTotalFollowers();
	darkOverviewCardBody();
	darkH4();
	document.querySelector(".attribution").style.color = "white";
}

function lightCardBody() {
	document.getElementById("card-one-body").classList.add("light-card-body");
	document.getElementById("card-two-body").classList.add("light-card-body");
	document.getElementById("card-three-body").classList.add("light-card-body");
	document.getElementById("card-four-body").classList.add("light-card-body");
}

function darkCardBody() {
	document.getElementById("card-one-body").classList.remove("light-card-body");
	document.getElementById("card-two-body").classList.remove("light-card-body");
	document.getElementById("card-three-body").classList.remove("light-card-body");
	document.getElementById("card-four-body").classList.remove("light-card-body");
}

function lightTotalFollowers() {
	document.getElementById("light-first-total-followers").style.color = "hsl(230, 17%, 14%)";
	document.getElementById("light-second-total-followers").style.color = "hsl(230, 17%, 14%)";
	document.getElementById("light-third-total-followers").style.color = "hsl(230, 17%, 14%)";
	document.getElementById("light-fourth-total-followers").style.color = "hsl(230, 17%, 14%)";
}

function darkTotalFollowers() {
	document.getElementById("light-first-total-followers").style.color = "white";
	document.getElementById("light-second-total-followers").style.color = "white";
	document.getElementById("light-third-total-followers").style.color = "white";
	document.getElementById("light-fourth-total-followers").style.color = "white";
}

function lightOverviewCardBody() {
	document.getElementById("overview-card-body-one").style.backgroundColor = "hsl(227, 47%, 96%)";
	document.getElementById("overview-card-body-two").style.backgroundColor = "hsl(227, 47%, 96%)";
	document.getElementById("overview-card-body-three").style.backgroundColor = "hsl(227, 47%, 96%)";
	document.getElementById("overview-card-body-four").style.backgroundColor = "hsl(227, 47%, 96%)";
	document.getElementById("overview-card-body-five").style.backgroundColor = "hsl(227, 47%, 96%)";
	document.getElementById("overview-card-body-six").style.backgroundColor = "hsl(227, 47%, 96%)";
	document.getElementById("overview-card-body-seven").style.backgroundColor = "hsl(227, 47%, 96%)";
	document.getElementById("overview-card-body-eight").style.backgroundColor = "hsl(227, 47%, 96%)";
}

function darkOverviewCardBody() {
	document.getElementById("overview-card-body-one").style.backgroundColor = "hsl(228, 28%, 20%)";
	document.getElementById("overview-card-body-two").style.backgroundColor = "hsl(228, 28%, 20%)";
	document.getElementById("overview-card-body-three").style.backgroundColor = "hsl(228, 28%, 20%)";
	document.getElementById("overview-card-body-four").style.backgroundColor = "hsl(228, 28%, 20%)";
	document.getElementById("overview-card-body-five").style.backgroundColor = "hsl(228, 28%, 20%)";
	document.getElementById("overview-card-body-six").style.backgroundColor = "hsl(228, 28%, 20%)";
	document.getElementById("overview-card-body-seven").style.backgroundColor = "hsl(228, 28%, 20%)";
	document.getElementById("overview-card-body-eight").style.backgroundColor = "hsl(228, 28%, 20%)";
}

function lightH4() {
	document.getElementById("first-h4").style.color = "black";
	document.getElementById("second-h4").style.color = "black";
	document.getElementById("third-h4").style.color = "black";
	document.getElementById("fourth-h4").style.color = "black";
	document.getElementById("fifth-h4").style.color = "black";
	document.getElementById("sixth-h4").style.color = "black";
	document.getElementById("seventh-h4").style.color = "black";
	document.getElementById("eight-h4").style.color = "black";
}

function darkH4() {
	document.getElementById("first-h4").style.color = "white";
	document.getElementById("second-h4").style.color = "white";
	document.getElementById("third-h4").style.color = "white";
	document.getElementById("fourth-h4").style.color = "white";
	document.getElementById("fifth-h4").style.color = "white";
	document.getElementById("sixth-h4").style.color = "white";
	document.getElementById("seventh-h4").style.color = "white";
	document.getElementById("eight-h4").style.color = "white";
}
