var music = ["song01", "song02", "song03", "song04"];

function iniciar(m) {
  player.iniciar(m);
}

var player = {
  name: "",
  age: "",
  tocar(str) {
    return console.log(`Tocando ${str}`);
  },
};

function play() {
  for (m in music) {
    console.log(m);
    player.tocar(m);
  }
  console.log("fim");
}

function pause() {
  //sistem.pause();
  console.log("Pausar musica");
}

function continueMusic() {
  console.log("Continuar musica")
}

play();
