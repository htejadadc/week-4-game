
var wins = 0;
var losses = 0;
var score = 0;
var computerChoice = 0;
var valueRuby = 0;
var valueDiamond = 0;
var valueTanzanite = 0;
var valueEmerald = 0;

function reset() {
	score = 0;
	computerChoice = Math.floor((Math.random()*101) + 19);
	valueRuby = Math.floor((Math.random()*11) + 1);
	valueDiamond = Math.floor((Math.random()*11) + 1);
	valueTanzanite = Math.floor((Math.random()*11) + 1);
	valueEmerald = Math.floor((Math.random()*11) + 1);
	$("#computerChoice").html(computerChoice);
	$("#score").html(score);
}

reset();

$(document).ready(function () {
	$("#computerChoice").html(computerChoice);
	$(document).on("click", "button", function(){
		if ($(this).hasClass("ruby")) {
			score = score + valueRuby;
			$("#score").html(score);
		}
		if ($(this).hasClass("diamond")) {
			score = score + valueDiamond;
			$("#score").html(score);
		}
		if ($(this).hasClass("tanzanite")) {
			score = score + valueTanzanite;
			$("#score").html(score);
		}
		if ($(this).hasClass("emerald")) {
			score = score + valueEmerald;
			$("#score").html(score);
		}
		if (score === computerChoice) {
			wins++;
			console.log(wins);
			$("#wins").html("Wins: " + wins);
			reset();
		}
		if (score > computerChoice) {
			losses++;
			$("#losses").html("Losses: " + losses);
			reset();
		}
	});
});
