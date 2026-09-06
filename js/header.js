document.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  const headerHTML = `
    <header class="site-header">
      <div class="header-container">
        <!-- 店名 Logo 與右側社交/商家檔案圖示群 -->
        <div class="brand-area">
          <a href="index.html" class="brand-logo">
            🚲 捷安特<span>富國店</span>
          </a>
          <div class="brand-socials">
            <a href="https://facebook.com" target="_blank" title="Facebook 粉專">f</a>
            <a href="https://line.me" target="_blank" title="官方 LINE">LINE</a>
            <a href="https://maps.google.com" target="_blank" title="Google 商家檔案">📍</a>
          </div>
        </div>

        <!-- 📱 手機版漢堡選單按鈕 -->
        <button class="mobile-menu-toggle" id="mobileMenuBtn" aria-label="切換選單">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>

        <!-- 導覽連結區域 -->
        <div class="nav-wrapper" id="navWrapper">
          <nav class="nav-links">
            <a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">首頁</a>
            <a href="about.html" class="${currentPath === 'about.html' ? 'active' : ''}">關於我們</a>
            <a href="products.html" class="${currentPath === 'products.html' ? 'active' : ''}">精選車款</a>
            <a href="news.html" class="${currentPath === 'news.html' ? 'active' : ''}">最新消息</a>
            <a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">聯絡與預約</a>
          </nav>
        </div>
      </div>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // 漢堡選單開關邏輯
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navWrapper = document.getElementById("navWrapper");

  if (menuBtn && navWrapper) {
    menuBtn.addEventListener("click", function() {
      menuBtn.classList.toggle("active");
      navWrapper.classList.toggle("open");
    });
  }
});
