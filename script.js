// Lê year.json e coloca no marquee
fetch('year.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('marquee-text').textContent = data.text;
  })
  .catch(err => console.error('Erro ao carregar year.json', err));
