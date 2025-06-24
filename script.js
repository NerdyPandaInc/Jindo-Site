const memeIds = [
  'dogecoin', 'shiba-inu', 'pepe', 'trump', 'bonk',
  'spx6900', 'fartcoin', 'floki', 'dogwifhat', 'pudgy-penguins'
];

fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${memeIds.join(',')}&vs_currencies=usd`)
  .then(res => res.json())
  .then(data => {
    const ticker = document.getElementById('memeTicker-content');
    const items = memeIds.map(id => {
      const price = data[id]?.usd?.toFixed(6) || 'N/A';
      return `<span style="margin-left: 40px;">${id.replace(/-/g, ' ').toUpperCase()}: $${price}</span>`;
    });
    ticker.innerHTML = items.join('');
  });


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generateBtn").addEventListener("click", () => {
    const template = document.getElementById("template").value;
    const top = encodeURIComponent(document.getElementById("topText").value || "_");
    const bottom = encodeURIComponent(document.getElementById("bottomText").value || "_");
    const url = `https://api.memegen.link/images/${template}/${top}/${bottom}.png`;

    const img = document.getElementById("memeImage");
    img.src = url;

    document.getElementById("memePreview").style.display = "inline-block";
    document.getElementById("downloadLink").href = url;
    document.getElementById("downloadLink").style.display = "inline-block";
  });
});
