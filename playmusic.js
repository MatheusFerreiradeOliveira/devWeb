var music = ["song01", "song02", "song03", "song04"];

function play(){
	music.forEach(m => {
		if(m == "song03") {
			pause();
		}
		console.log(m)
	});
	console.log("fim");
}
function pause(){
	console.log("Pausado, nao gosto dessa musica")
}

function continueMusic() {
  console.log("Continuar musica!")
}

play();
