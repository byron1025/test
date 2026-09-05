document.addEventListener("DOMContentLoaded", function () {
  // 建立頂部導覽列 HTML 結構
  const headerHTML = `
    <header class="main-header">
      <div class="header-container">
        <!-- 品牌 Logo / 名稱 -->
        <a href="index.html" class="brand-logo">
          🚴‍♂️ 捷安特富國自行車店
        </a>

        <!-- 主選單連結 -->
        <nav class="nav-links">
          <a href="index.html">首頁</a>
          <a href="products.html">精選車款</a>
          <a href="news.html">最新消息</a>
          <a href="contact.html">聯絡與預約</a>
          
          <!-- 社群與商家地圖連結（開新視窗） -->
          <div class="header-social-links">
            <a href="https://www.facebook.com/profile.php?id=61579727196259" target="_blank" class="header-social-icon" title="Facebook 粉絲專頁">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook">
            </a>
            <a href="https://lin.ee/vCiX2Lr" target="_blank" class="header-social-icon" title="加入 LINE 好友">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="LINE">
            </a>
            <a href="https://share.google/1ZInzTDrKBz7KodLT" target="_blank" class="header-social-icon header-map-icon" title="富國腳踏車店 Google 商家檔案">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  `;

  // 將 Header 插入頁面最頂端
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
