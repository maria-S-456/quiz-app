var x = 0;
var questions = {
"questionOne":
	["which dwarf planet has the furthest orbit?", "Pluto", "Makemake", "Sedna", "Haumea"],
"questionTwo":
	["Why does Haumea have a football-like appearance?", "It is heavily bombarded by asteroids, which have altered it's appearance.", "It's moons' strong gravity has caused it to stretch.", "It's gravity is not strong enough to keep it in a spherical shape.", "It's rotation is extremely fast, giving it an elongated shape."],
"questionThree":
	["What is NOT a criteria to be called a planet?", "It must have an atmosphere.", "It orbits the sun.", "It is round in shape.", "There are no foreign objects in it's orbit."],
"questionFour":
	["What is the closest dwarf planet?", "Pluto", "Eris", "Ceres", "Makemake"],
"questionFive":
	[
		"What makes Pluto's orbit different from the rest of the planets?", "It wobbles.", "It crosses Neptune's orbit", "It crosses Uranus's orbit", "It is perfectly circular."]
}; //JSON object
$(document).ready(function() {
	alert('Form loaded');


	$('#submitBtn').click(function()
	{
		$("p").removeClass("center");
		$("ul").removeClass("center");
		$("button").addClass("center");
		$("#first").text("blue");
	});

});