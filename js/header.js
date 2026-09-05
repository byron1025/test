document.addEventListener("DOMContentLoaded", function () {
  // 建立頂部導覽列 HTML 結構
  const headerHTML = `
    <header class="main-header">
      <div class="header-container" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 20px;">
        
        <!-- 左側：品牌 Logo + 社群圖示按鈕 -->
        <div style="display: flex; align-items: center; gap: 12px;">
          <a href="index.html" class="brand-logo" style="font-weight: bold; text-decoration: none; font-size: 1.2rem;">
            🚴‍♂️ 捷安特富國自行車店
          </a>

          <!-- 社群與商家地圖連結（放在 Logo 旁邊） -->
          <div style="display: inline-flex; align-items: center; gap: 8px; padding-left: 10px; border-left: 1px solid #ccc;">
            <a href="https://www.facebook.com/profile.php?id=61579727196259" target="_blank" title="Facebook 粉絲專頁" style="display: inline-block; width: 30px; height: 30px; border-radius: 50%; overflow: hidden; vertical-align: middle;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" style="width: 30px !important; height: 30px !important; display: block; object-fit: cover;">
            </a>
            
            <a href="https://lin.ee/vCiX2Lr" target="_blank" title="加入 LINE 好友" style="display: inline-block; width: 30px; height: 30px; border-radius: 50%; overflow: hidden; vertical-align: middle;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="LINE" style="width: 30px !important; height: 30px !important; display: block; object-fit: cover;">
            </a>
            
            <a href="https://share.google/1ZInzTDrKBz7KodLT" target="_blank" title="富國腳踏車店 Google 商家檔案" style="display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.3); vertical-align: middle;">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 18px !important; height: 18px !important; fill: #ea4335; display: block;">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- 右側：主選單連結 -->
        <nav class="nav-links" style="display: flex; align-items: center; gap: 15px;">
          <a href="index.html" style="text-decoration: none;">首頁</a>
          <a href="products.html" style="text-decoration: none;">精選車款</a>
          <a href="news.html" style="text-decoration: none;">最新消息</a>
          <a href="contact.html" style="text-decoration: none;">聯絡與預約</a>
        </nav>
      </div>
    </header>
  `;

  // 將 Header 插入頁面最頂端
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
