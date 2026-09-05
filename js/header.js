document.addEventListener("DOMContentLoaded", function () {
  // 1. 注入全站 Header 與 Footer HTML
  const headerHTML = `
    <header class="main-header">
      <div class="header-container">
        <!-- 品牌 Logo -->
        <a href="index.html" class="logo">
          🚴‍♂️ 捷安特富國店
        </a>

        <!-- 手機版漢堡選單按鈕 -->
        <button class="hamburger-btn" id="hamburger-btn" aria-label="切換選單">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>

        <!-- 導覽連結選單 -->
        <nav class="nav-menu" id="nav-menu">
          <a href="index.html" class="nav-link">首頁</a>
          <a href="news.html" class="nav-link">最新消息</a>
          <a href="products.html" class="nav-link">車款目錄</a>
          <a href="contact.html" class="nav-btn-red">線上預約 / 門市資訊</a>
        </nav>
      </div>
    </header>

    <style>
      /* 全局 Header 樣式 (深藍底 + 鮮黃底線) */
      .main-header {
        background-color: #1e3a8a;
        color: white;
        padding: 0.8rem 1.5rem;
        border-bottom: 4px solid #facc15;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 1000;
      }

      .header-container {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        color: white;
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      /* 電腦版選單佈局 */
      .nav-menu {
        display: flex;
        align-items: center;
        gap: 1.2rem;
      }

      .nav-link {
        color: #e2e8f0;
        text-decoration: none;
        font-weight: bold;
        font-size: 0.95rem;
        transition: color 0.2s;
      }

      .nav-link:hover {
        color: #facc15; /* 鮮黃 Hover */
      }

      .nav-btn-red {
        background-color: #dc2626; /* 鮮紅按鈕 */
        color: white;
        text-decoration: none;
        padding: 6px 14px;
        border-radius: 6px;
        font-weight: bold;
        font-size: 0.95rem;
        transition: background-color 0.2s;
        text-align: center;
      }

      .nav-btn-red:hover {
        background-color: #b91c1c;
      }

      /* 預設隱藏漢堡按鈕 (電腦版) */
      .hamburger-btn {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
      }

      .hamburger-btn .bar {
        height: 3px;
        width: 100%;
        background-color: #facc15; /* 鮮黃色線條 */
        border-radius: 10px;
        transition: all 0.3s ease;
      }

      /* 📱 響應式媒體查詢 (螢幕寬度 < 768px 時切換為漢堡選單) */
      @media (max-width: 768px) {
        .hamburger-btn {
          display: flex; /* 顯示漢堡按鈕 */
        }

        .nav-menu {
          display: none; /* 手機版預設隱藏選單 */
          flex-direction: column;
          width: 100%;
          background-color: #1e3a8a; /* 深藍底色 */
          position: absolute;
          top: 100%;
          left: 0;
          padding: 1rem 0;
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
          border-bottom: 3px solid #facc15;
          gap: 1rem;
        }

        /* 當被觸發 active 時展開選單 */
        .nav-menu.active {
          display: flex;
        }

        .nav-link, .nav-btn-red {
          width: 85%;
          text-align: center;
          padding: 8px 0;
        }

        /* 漢堡按鈕點擊後變成 X 動畫 */
        .hamburger-btn.active .bar:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        .hamburger-btn.active .bar:nth-child(2) {
          opacity: 0;
        }
        .hamburger-btn.active .bar:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
      }
    </style>
  `;

  // 2. 頁尾 HTML
  const footerHTML = `
    <footer style="text-align: center; padding: 2rem 1rem; background: #0f172a; color: #94a3b8; margin-top: 3rem; border-top: 4px solid #facc15;">
      <p style="margin-bottom: 0.5rem; font-weight: bold; color: white;">🚴‍♂️ 捷安特富國自行車店（國民旅遊卡特約商店）</p>
      <p style="font-size: 0.9rem;">地址：新北市鶯歌區鶯桃路 182 巷 22 號｜電話：(02) 2679-5485</p>
      <p style="font-size: 0.8rem; color: #64748b; margin-top: 0.8rem;">© ${new Date().getFullYear()} Giant Fuguo Bicycle Store. All rights reserved.</p>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // 3. 綁定漢堡選單點擊事件
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", function () {
      hamburgerBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }
});
