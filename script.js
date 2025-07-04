async function buscarLinks() {
    const nomeAnime = document.getElementById('animeName').value;
    if (!nomeAnime) {
        alert('Por favor, insira o nome do anime.');
        return;
    }

    const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(nomeAnime)}&limit=1`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.data && data.data.length > 0) {
        const anime = data.data[0];
        const listaLinks = document.getElementById('resultados');
        listaLinks.innerHTML = `
            <li><strong>${anime.title}</strong></li>
            <li><a href="${anime.url}" target="_blank">Assistir no MyAnimeList</a></li>
        `;
    } else {
        alert('Anime não encontrado.');
    }
}
