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
  