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

var testQuestions = {["which dwarf planet has the furthest orbit?"], ["Why does Haumea have a football-like appearance?"],["What is NOT a criteria to be called a planet?"],["What is the closest dwarf planet?"],["What makes Pluto's orbit different from the rest of the planets?"]};
var firstOption = {["Pluto"],["It is heavily bombarded by asteroids, which have altered it's appearance."],["It must have an atmosphere."],["Pluto"],["It wobbles."]};
var secondOption = {["Makemake"],["It's moons' strong gravity has caused it to stretch."],["It orbits the sun."],["Eris"],["It crosses Neptune's orbit."]};
var thirdOption = {["Sedna"],["It's gravity is not strong enough to keep it in a spherical shape."],["It is round in shape."],["Ceres"],["It crosses Uranus's orbit"]};
var fourthOption = {["Haumea"],["It's rotation is extremely fast, giving it an elongated shape."],["There are no foreign objects in it's orbit."],["Makemake"],["It is perfectly circular."]};
$(document).ready(function() {
	$('#submitBtn').click(function()
	{
		$("p").removeClass("center");
		$("ul").removeClass("center");
		$("ul").removeClass("hidden");
		$("p").text(testQuestions[x]);
		$("#first").text(firstOption[x]);
		$("#second").text(secondOption[x]);
		$("#third").text(thirdOption[x]);
		$("#fourth").text(fourthOption[x]);
	});

});