document.addEventListener("DOMContentLoaded", function () {
  const BASE_GAS_URL = "https://script.google.com/macros/s/AKfycbwrzmyOBpf3GHooeExrj_3DJKRx5fPeQ9uuGA7Ro0qmIzj0OxdTzzCVkXk5czyHlVVG/exec";

  // 1. 載入首頁最新消息
  const newsContainer = document.getElementById("news-container");
  if (newsContainer) {
    fetch(BASE_GAS_URL + "?v=" + Date.now())
      .then(res => res.json())
      .then(data => {
        const newsList = data.news || [];
        if (newsList.length === 0) {
          newsContainer.innerHTML = '<p class="text-center text-muted">目前暫無公告消息。</p>';
          return;
        }

        newsContainer.innerHTML = newsList.map(item => `
          <div class="news-card">
            <div class="news-header">
              <span class="tag">${item.category}</span>
              <span class="date">${item.date}</span>
            </div>
            <h3 class="news-title">${item.title}</h3>
            <p class="news-content">${item.content}</p>
          </div>
        `).join('');
      })
      .catch(err => {
        console.error("最新消息載入錯誤:", err);
      });
  }
});
