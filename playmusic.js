var music=["song01", "song02", "song03", "song04"];
var player;
function play(){
	for(m in music){
		console.log(m);
		player.tocar(m);
	}
}

play();