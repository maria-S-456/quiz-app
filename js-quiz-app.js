var x = 0;
function createQuestions(){

return {"questionSets":
			[
				{
					"question": "which dwarf planet has the furthest orbit?",
					"firstOption": "Pluto",
					"secondOption": "Makemake",
					"thirdOption": "Sedna",
					"fourthOption": "Haumea"
				},
				{
					"question": "Why does Haumea have a football-like appearance?",
					"firstOption": "It is heavily bombarded by asteroids, which have altered it's appearance.",
					"secondOption": "It's moons' strong gravity has caused it to stretch.",
					"thirdOption": "It's gravity is not strong enough to keep it in a spherical shape.",
					"fourthOption": "It's rotation is extremely fast, giving it an elongated shape."
				},
				{
					"question": "What is NOT a criteria to be called a planet?",
					"firstOption": "It must have an atmosphere.",
					"secondOption": "It orbits the sun.",
					"thirdOption": "It is round in shape.",
					"fourthOption": "There are no foreign objects in it's orbit."
				},
				{
					"question": "What is the closest dwarf planet?",
					"firstOption": "Pluto",
					"secondOption": "Eris",
					"thirdOption": "Ceres",
					"fourthOption": "Makemake"
				},
				{
					"question": "What makes Pluto's orbit different from the rest of the planets?",
					"firstOption": "It wobbles.",
					"secondOption": "It crosses Neptune's orbit",
					"thirdOption": "It crosses Uranus's orbit",
					"fourthOption": "It is perfectly circular."
				}
			]};
		}

function display(quiz)
{
	$("p").text(quiz.questionSets[x].question);
	$("#first").text(quiz.questionSets[x].firstOption);
	$("#second").text(quiz.questionSets[x].secondOption);
	$("#third").text(quiz.questionSets[x].thirdOption);
	$("#fourth").text(quiz.questionSets[x].fourthOption);
}
function secondClick(){
	$("p").text("Results: 10/10");
	$("#submitBtn").remove();
}
/*
var testQuestions = {["which dwarf planet has the furthest orbit?"], ["Why does Haumea have a football-like appearance?"],["What is NOT a criteria to be called a planet?"],["What is the closest dwarf planet?"],["What makes Pluto's orbit different from the rest of the planets?"]};
var firstOption = {["Pluto"],["It is heavily bombarded by asteroids, which have altered it's appearance."],["It must have an atmosphere."],["Pluto"],["It wobbles."]};
var secondOption = {["Makemake"],["It's moons' strong gravity has caused it to stretch."],["It orbits the sun."],["Eris"],["It crosses Neptune's orbit."]};
var thirdOption = {["Sedna"],["It's gravity is not strong enough to keep it in a spherical shape."],["It is round in shape."],["Ceres"],["It crosses Uranus's orbit"]};
var fourthOption = {["Haumea"],["It's rotation is extremely fast, giving it an elongated shape."],["There are no foreign objects in it's orbit."],["Makemake"],["It is perfectly circular."]};
*/
$(document).ready(function() {
	$('#submitBtn').click(function()
	{
		var planetQuiz = createQuestions();
		$("p").removeClass("center");
		$("fieldset").removeClass("center");
		$("fieldset").removeClass("hidden");
		$("#options-div").removeClass("hidden");
		display(planetQuiz);
		x++;
		if(x == 5){
			$("submitBtn").off('click', secondClick);
		}
		
//		$("#first").text(firstOption[x]);
//		$("#second").text(secondOption[x]);
//		$("#third").text(thirdOption[x]);
//		$("#fourth").text(fourthOption[x]);
	});

});