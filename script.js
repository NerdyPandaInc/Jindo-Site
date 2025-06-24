fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin,pepe,shiba-inu&vs_currencies=usd')
  .then(res => res.json())
  .then(data => {
    const ticker = document.getElementById('memeTicker-content');
    ticker.innerHTML = Object.entries(data)
      .map(([name, val]) => `<span style="margin-right: 40px;">${name.toUpperCase()}: $${val.usd}</span>`)
      .join('');
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
