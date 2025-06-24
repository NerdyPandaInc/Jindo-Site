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
