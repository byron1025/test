document.addEventListener("DOMContentLoaded", function () {
  const isSubFolder = window.location.pathname.includes("/pages/");
  const basePath = isSubFolder ? "../" : "./";
  const pagesPath = isSubFolder ? "./" : "./pages/";

  const headerHTML = `
    <header>
      <a href="${basePath}index.html" class="logo" id="site-logo">富國腳踏車店</a>
      <nav>
        <a href="${basePath}index.html">首頁</a>
        <a href="${pagesPath}news.html">最新消息</a>
        <a href="${pagesPath}products.html">車款目錄</a>
        <a href="${pagesPath}contact.html">門市預約</a>
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
