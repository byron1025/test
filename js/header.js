document.addEventListener("DOMContentLoaded", function () {
  // 動態注入美化版美學樣式
  const style = document.createElement('style');
  style.innerHTML = `
    .main-header {
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
      width: 100%;
      position: relative;
      z-index: 1000;
      border-bottom: 3px solid #f59e0b;
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
      gap: 14px;
    }
    .brand-logo {
      font-weight: 800;
      text-decoration: none;
      font-size: 1.25rem;
      color: #ffffff;
      white-space: nowrap;
      letter-spacing: 0.5px;
      transition: opacity 0.2s;
    }
    .brand-logo:hover {
      opacity: 0.9;
    }
    .brand-logo span {
      color: #f59e0b;
    }
    .social-group {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding-left: 12px;
      border-left: 1px solid rgba(255, 255, 255, 0.25);
    }
    .social-icon-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      text-decoration: none;
      overflow: hidden;
    }
    .social-icon-btn:hover {
      transform: translateY(-2px) scale(1.1);
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 22px;
    }
    .nav-links a {
      text-decoration: none;
      color: #e2e8f0;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.2s ease;
      padding: 4px 8px;
      border-radius: 4px;
    }
    .nav-links a:hover {
      color: #f59e0b;
      background-color: rgba(255, 255, 255, 0.08);
    }

    /* 🍔 漢堡選單按鈕 */
    .hamburger-btn {
      display: none;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      font-size: 1.4rem;
      cursor: pointer;
      color: #f59e0b;
      padding: 4px 10px;
      line-height: 1;
      transition: background 0.2s;
    }
    .hamburger-btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    /* 📱 手機版 RWD 排版 */
    @media (max-width: 768px) {
      .hamburger-btn {
        display: block;
      }
      .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        background: #0f172a;
        box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        padding: 10px 0;
        gap: 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      }
      .nav-links.active {
        display: flex;
      }
      .nav-links a {
        padding: 14px 24px;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        color: #f8fafc;
      }
      .nav-links a:hover {
        background-color: #1e293b;
        color: #f59e0b;
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
            🚴‍♂️ 捷安特<span>富國店</span>
          </a>

          <div class="social-group">
            <a href="https://www.facebook.com/profile.php?id=61579727196259" target="_blank" class="social-icon-btn" title="Facebook 粉絲專頁">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" style="width:30px; height:30px; display:block;">
            </a>
            
            <a href="https://lin.ee/vCiX2Lr" target="_blank" class="social-icon-btn" title="加入 LINE 好友">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="LINE" style="width:30px; height:30px; display:block;">
            </a>
            
            <a href="https://share.google/1ZInzTDrKBz7KodLT" target="_blank" class="social-icon-btn" title="富國腳踏車店 Google 商家檔案">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:18px; height:18px; fill:#ea4335; display:block;">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5-2.5z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- 🍔 右側漢堡按鈕 (手機版) -->
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

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // 🍔 漢堡切換邏輯
  const toggleBtn = document.getElementById("hamburger-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      toggleBtn.innerHTML = navMenu.classList.contains("active") ? "✖" : "☰";
    });
  }
});
