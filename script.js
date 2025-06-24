// 3) JavaScript: include just before </body>
<script>
  async function loadMemeTicker() {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets" +
      "?vs_currency=usd&category=meme&order=market_cap_desc&per_page=10&page=1";
    try {
      const res = await fetch(url);
      const coins = await res.json();
      const container = document.getElementById("memeTicker-content");
      container.innerHTML = coins.map(c => {
        const change = c.price_change_percentage_24h.toFixed(2);
        const cls = change >= 0 ? "memeUp" : "memeDown";
        return `<span class="${cls}">
                  ${c.symbol.toUpperCase()}: ${change}% 
                </span>`;
      }).join("");
    } catch (e) {
      console.error("Ticker load failed", e);
    }
  }

  // reload every 5 minutes
  loadMemeTicker();
  setInterval(loadMemeTicker, 5 * 60 * 1000);
</script>


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
