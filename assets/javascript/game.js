$(document).ready(function(){
	var gene = $("#beef");
	var zeke = $("#zeke");
	var twins = $("#twins");
	var tina = $("#tina");
	var choices = [gene, zeke, twins, tina];
	playerChoice = false;
	enemyChoice = false;
	player = 0 ;
	enemy = 0 ;


	function setPlayer(character){
		if (playerChoice === false){
			playerChoice = true;
			$(character).appendTo(".you");
			player = character;
			
			for(var i = 0; i < choices.length; i++){
				if(choices[i] !== character){	
					$(choices[i]).appendTo(".them");
				};
			};	
		}

		else if(playerChoice === true && enemyChoice === false){
			enemyChoice = true;
			$(character).appendTo(".enemy");
			enemy = character;
		}

		else{
			alert("Let the Burger Battle begin!");
		 }
	};


$(gene).click(function(){
		setPlayer(gene);
		$(".character-choices").remove();
	});
$(zeke).click(function(){
		setPlayer(zeke);
		$(".character-choices").remove();
	});
$(twins).click(function(){
		setPlayer(twins);
		$(".character-choices").remove();
	});
$(tina).click(function(){
		setPlayer(tina);
		$(".character-choices").remove();
	});
});