document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header>
      <a href="./index.html" class="logo" id="site-logo">富國腳踏車店</a>
      <nav>
        <a href="./index.html">首頁</a>
        <a href="./news.html">最新消息</a>
        <a href="./products.html">車款目錄</a>
        <a href="./contact.html">門市預約</a>
      </nav>
    </header>
  `;

  const footerHTML = `
    <footer>
      <p>&copy; ${new Date().getFullYear()} 富國腳踏車店 All Rights Reserved.</p>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
