document.addEventListener("DOMContentLoaded", function () {
  const isSubFolder = window.location.pathname.includes("/pages/");
  const jsonPath = isSubFolder ? "../data/site-data.json" : "./data/site-data.json";

  fetch(jsonPath)
    .then(res => res.json())
    .then(data => {
      if (document.getElementById("site-logo")) {
        document.getElementById("site-logo").innerText = data.siteName;
      }

      const heroTitle = document.getElementById("hero-title");
      const heroSub = document.getElementById("hero-sub");
      if (heroTitle && data.home) {
        heroTitle.innerText = data.home.bannerTitle;
        heroSub.innerText = data.home.bannerSub;
      }

      const featureContainer = document.getElementById("feature-container");
      if (featureContainer && data.home && data.home.features) {
        featureContainer.innerHTML = data.home.features.map(item => `
          <div class="card">
            <h3 style="color: #0284c7;">${item.title}</h3>
            <p style="margin-top: 0.5rem; color: #475569;">${item.desc}</p>
          </div>
        `).join('');
      }
    })
    .catch(err => console.error("JSON 載入失敗：", err));
});
