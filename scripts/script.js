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

// Percorre cada botão de play e adiciona o evento de clique
playButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const audioSrc = button.dataset.audio;
    const audioElement = new Audio(audioSrc);
    audioElement.play();
  });
});
