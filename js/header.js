document.addEventListener("DOMContentLoaded", function () {
  // 動態注入響應式與漢堡選單 CSS 樣式
  const style = document.createElement('style');
  style.innerHTML = `
    .main-header {
      background-color: #ffffff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      width: 100%;
      position: relative;
      z-index: 1000;
    }
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .brand-logo {
      font-weight: bold;
      text-decoration: none;
      font-size: 1.25rem;
      color: #1e3a8a;
      white-space: nowrap;
    }
    .social-group {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding-left: 10px;
      border-left: 1px solid #cbd5e1;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .nav-links a {
      text-decoration: none;
      color: #334155;
      font-weight: 500;
      font-size: 0.95rem;
      transition: color 0.2s;
    }
    .nav-links a:hover {
      color: #2563eb;
    }

    /* 🍔 漢堡選單按鈕（預設隱藏） */
    .hamburger-btn {
      display: none;
      background: none;
      border: none;
      font-size: 1.6rem;
      cursor: pointer;
      color: #1e3a8a;
      padding: 4px 8px;
      line-height: 1;
    }

    /* 📱 手機版樣式 (螢幕寬度 < 768px) */
    @media (max-width: 768px) {
      .hamburger-btn {
        display: block; /* 手機版顯示漢堡按鈕 */
      }
      .nav-links {
        display: none; /* 手機版預設隱藏選單 */
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #ffffff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        padding: 15px 0;
        gap: 0;
        border-top: 1px solid #f1f5f9;
      }
      .nav-links.active {
        display: flex; /* 點擊漢堡按鈕後展開 */
      }
      .nav-links a {
        padding: 12px 24px;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #f8fafc;
      }
      .nav-links a:hover {
        background-color: #f1f5f9;
      }
    }
  `;
  document.head.appendChild(style);

  // 建立頂部導覽列 HTML 結構
  const headerHTML = `
    <header class="main-header">
      <div class="header-container">
        
        <!-- 左側：品牌 Logo + 社群圖示按鈕 -->
        <div class="header-left">
          <a href="index.html" class="brand-logo">
            🚴‍♂️ 捷安特富國自行車店
          </a>

          <div class="social-group">
            <a href="https://www.facebook.com/profile.php?id=61579727196259" target="_blank" title="Facebook 粉絲專頁" style="display: inline-block; width: 30px; height: 30px; border-radius: 50%; overflow: hidden; vertical-align: middle;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" style="width: 30px !important; height: 30px !important; display: block; object-fit: cover;">
            </a>
            
            <a href="https://lin.ee/vCiX2Lr" target="_blank" title="加入 LINE 好友" style="display: inline-block; width: 30px; height: 30px; border-radius: 50%; overflow: hidden; vertical-align: middle;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="LINE" style="width: 30px !important; height: 30px !important; display: block; object-fit: cover;">
            </a>
            
            <a href="https://share.google/1ZInzTDrKBz7KodLT" target="_blank" title="富國腳踏車店 Google 商家檔案" style="display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.3); vertical-align: middle;">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 18px !important; height: 18px !important; fill: #ea4335; display: block;">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5-2.5z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- 🍔 右側漢堡按鈕 (手機版顯示) -->
        <button class="hamburger-btn" id="hamburger-toggle" aria-label="切換選單">
          ☰
        </button>

        <!-- 主選單連結 -->
        <nav class="nav-links" id="nav-menu">
          <a href="index.html">首頁</a>
          <a href="products.html">精選車款</a>
          <a href="news.html">最新消息</a>
          <a href="contact.html">聯絡與預約</a>
        </nav>
      </div>
    </header>
  `;

  // 將 Header 插入頁面最頂端
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // 🍔 綁定漢堡按鈕點擊事件
  const toggleBtn = document.getElementById("hamburger-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      // 切換按鈕圖案 (☰ ↔ ✖)
      toggleBtn.innerHTML = navMenu.classList.contains("active") ? "✖" : "☰";
    });
  }
});
