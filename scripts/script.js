function search() {
    const searchText = document.getElementById('search-text').value.trim();
  
    if (searchText !== '') {
      const result = window.find(searchText, false, false, true, false, true, false);
  
      if (!result) {
        alert('A palavra pesquisada não foi encontrada no site.');
      }
    } else {
      alert('Digite uma palavra para pesquisar.');
    }
  
    return false;
}

// Seleciona todos os botões de play com a classe 'play-music'
const playButtons = document.querySelectorAll(".play-music");
let currentAudio = null;

// Função para parar o áudio após um determinado tempo
function stopAudioAfterTimeout(audio) {
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0; // Reinicia o áudio para o início
  }, 10000); // Defina o tempo limite em milissegundos (10 segundos no exemplo)
}

// Percorre cada botão de play e adiciona o evento de clique
playButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Pausa o áudio atual, se estiver tocando
    if (currentAudio) {
      if (!currentAudio.paused) {
        currentAudio.pause();
        return;
      }
    }

    // Obtém o atributo data-audio do botão clicado
    const audioSrc = button.dataset.audio;
    const audioElement = new Audio(audioSrc);

    // Reproduz o novo áudio
    audioElement.play();
    
    // Define o áudio atual como o novo áudio
    currentAudio = audioElement;

    // Inicia a contagem de tempo limite para parar o áudio
    stopAudioAfterTimeout(currentAudio);
  });
});