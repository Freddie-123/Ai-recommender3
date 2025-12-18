document.getElementById("search-button").addEventListener("click", function () {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const recommendation = document.getElementById("recommendation");
  
  if (query.includes("write") || query.includes("document")) {
    recommendation.innerHTML = "<h2>Recommended: ChatGPT</h2>";
  } else if (query.includes("image") || query.includes("art")) {
    recommendation.innerHTML = "<h2>Recommended: DALL-E</h2>";
  } else if (query.includes("code") || query.includes("programming")) {
    recommendation.innerHTML = "<h2>Recommended: GitHub Copilot</h2>";
  } else {
    recommendation.innerHTML = "<h2>Sorry, no recommendation found!</h2>";
  }
});
