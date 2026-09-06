document.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  const headerHTML = `
    <header class="site-header">
      <div class="header-container">
        <a href="index.html" class="brand-logo">
          🚲 捷安特<span>富國店</span>
        </a>

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

          <div class="header-socials">
            <a href="https://facebook.com" target="_blank" title="Facebook">f</a>
            <a href="https://line.me" target="_blank" title="Line">LINE</a>
          </div>
        </div>
      </div>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // 漢堡選單開關 JS 邏輯
  const menuBtn = document.getElementById("mobileMenuBtn");
  const navWrapper = document.getElementById("navWrapper");

  if (menuBtn && navWrapper) {
    menuBtn.addEventListener("click", function() {
      menuBtn.classList.toggle("active");
      navWrapper.classList.toggle("open");
    });
  }
});
