document.addEventListener("DOMContentLoaded", () => {
  console.log("JINDO site loaded. Let the memecoin magic begin 🐕🔥");

  const button = document.getElementById("generateBtn");

  button.addEventListener("click", () => {
    const meme = document.getElementById("template").value;
    const top = encodeURIComponent(document.getElementById("topText").value);
    const bottom = encodeURIComponent(document.getElementById("bottomText").value);
    const url = `https://apimeme.com/meme?meme=${meme}&top=${top}&bottom=${bottom}`;

    const img = document.getElementById("memeImage");
    img.src = url;

    document.getElementById("memePreview").style.display = "inline-block";
    document.getElementById("downloadLink").href = url;
    document.getElementById("downloadLink").style.display = "inline-block";
  });
});
