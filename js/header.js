document.addEventListener("DOMContentLoaded", function () {
  // 1. 注入三主色導覽列 (藍底 + 黃/紅點綴)
  const headerHTML = `
    <header style="background-color: #1e3a8a; color: white; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border-bottom: 4px solid #facc15;">
      <a href="index.html" style="color: white; text-decoration: none; font-size: 1.4rem; font-weight: bold; display: flex; align-items: center; gap: 8px;">
        🚴‍♂️ 捷安特富國店
      </a>
      <nav>
        <a href="index.html" class="nav-link">首頁</a>
        <a href="products.html" class="nav-link">車款目錄</a>
        <a href="contact.html" class="nav-btn-red">線上預約 / 門市資訊</a>
      </nav>
    </header>

    <style>
      .nav-link { color: #e2e8f0; text-decoration: none; margin-left: 1.5rem; font-weight: 500; transition: color 0.2s; }
      .nav-link:hover { color: #facc15; } /* 懸停變鮮黃色 */
      .nav-btn-red { 
        background-color: #dc2626; 
        color: white; 
        text-decoration: none; 
        padding: 6px 14px; 
        border-radius: 6px; 
        margin-left: 1.5rem; 
        font-weight: bold; 
        transition: background-color 0.2s; 
      }
      .nav-btn-red:hover { background-color: #b91c1c; } /* 懸停變深紅 */
    </style>
  `;

  // 2. 注入三主色頁尾 (藍底 + 黃色標註)
  const footerHTML = `
    <footer style="text-align: center; padding: 2rem; background: #0f172a; color: #94a3b8; margin-top: 3rem; border-top: 3px solid #facc15;">
      <p style="margin-bottom: 0.5rem; font-weight: 500;">🚴‍♂️ 捷安特富國自行車店（國民旅遊卡特約商店）</p>
      <p>地址：新北市鶯歌區鶯桃路 182 巷 22 號｜電話：(02) 2679-5485</p>
      <p style="font-size: 0.85rem; color: #64748b; margin-top: 0.8rem;">© ${new Date().getFullYear()} Giant Fuguo Bicycle Store. All rights reserved.</p>
    </footer>
  `;

  // 自動插入頁首與頁尾
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
