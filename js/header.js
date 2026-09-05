document.addEventListener("DOMContentLoaded", function () {
  // 動態注入手機版響應式 CSS 樣式
  const style = document.createElement('style');
  style.innerHTML = `
    .main-header {
      background-color: #ffffff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      width: 100%;
    }
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      max-width: 1200px;
      margin: 0 auto;
      flex-wrap: wrap; /* 允許手機版自動換行 */
      gap: 12px;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
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
      gap: 16px;
      flex-wrap: wrap;
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

    /* 📱 手機版調整 (螢幕寬度小於 768px 時) */
    @media (max-width: 768px) {
      .header-container {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 15px;
        gap: 10px;
      }
      .header-left {
        width: 100%;
        justify-content: space-between; /* 手機版將店名與社群圖示分散兩端 */
      }
      .social-group {
        border-left: none; /* 手機版移除分隔線 */
        padding-left: 0;
      }
      .nav-links {
        width: 100%;
        justify-content: flex-start;
        gap: 12px;
        padding-top: 6px;
        border-top: 1px solid #f1f5f9; /* 手機版加上微弱分隔線 */
      }
      .nav-links a {
        font-size: 0.9rem;
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

          <!-- 社群與商家地圖連結 -->
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

        <!-- 右側：主選單連結 -->
        <nav class="nav-links">
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
});
