document.addEventListener("DOMContentLoaded", function () {
  // 注入全站 RWD 藍紅黃導覽列
  const headerHTML = `
    <header style="background-color: #1e3a8a; color: white; padding: 1rem 1.5rem; border-bottom: 4px solid #facc15; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      <div style="max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <a href="index.html" style="color: white; text-decoration: none; font-size: 1.3rem; font-weight: bold; display: flex; align-items: center; gap: 8px;">
          🚴‍♂️富國腳踏車店
        </a>
        <nav style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          <a href="index.html" class="nav-link">首頁</a>
          <a href="news.html" class="nav-link">最新消息</a>
          <a href="products.html" class="nav-link">車款目錄</a>
          <a href="contact.html" class="nav-btn-red">線上預約 / 門市資訊</a>
        </nav>
      </div>
    </header>

    <style>
      .nav-link { color: #e2e8f0; text-decoration: none; font-weight: bold; font-size: 0.95rem; transition: color 0.2s; }
      .nav-link:hover { color: #facc15; } /* 鮮黃 */
      .nav-btn-red { 
        background-color: #dc2626; /* 鮮紅 */
        color: white; 
        text-decoration: none; 
        padding: 6px 14px; 
        border-radius: 6px; 
        font-weight: bold; 
        font-size: 0.95rem;
        transition: background-color 0.2s; 
      }
      .nav-btn-red:hover { background-color: #b91c1c; }
    </style>
  `;

  // 注入全站頁尾
  const footerHTML = `
    <footer style="text-align: center; padding: 2rem 1rem; background: #0f172a; color: #94a3b8; margin-top: 3rem; border-top: 4px solid #facc15;">
      <p style="margin-bottom: 0.5rem; font-weight: bold; color: white;">🚴‍♂️ 捷安特富國自行車店（國民旅遊卡特約商店）</p>
      <p style="font-size: 0.9rem;">地址：新北市鶯歌區鶯桃路 182 巷 22 號｜電話：(02) 2679-5485</p>
      <p style="font-size: 0.8rem; color: #64748b; margin-top: 0.8rem;">© ${new Date().getFullYear()} Giant Fuguo Bicycle Store. All rights reserved.</p>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
