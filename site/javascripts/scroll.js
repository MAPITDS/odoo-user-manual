document.addEventListener("DOMContentLoaded", function() {
  // Buat kontainer untuk tombol-tombol arrow
  const scrollContainer = document.createElement("div");
  scrollContainer.id = "custom-scroll-widget";
  scrollContainer.style.position = "fixed";
  scrollContainer.style.bottom = "80px";
  scrollContainer.style.right = "24px";
  scrollContainer.style.display = "flex";
  scrollContainer.style.flexDirection = "column";
  scrollContainer.style.gap = "8px";
  scrollContainer.style.zIndex = "100";

  // Tombol ke Atas
  const btnUp = document.createElement("button");
  btnUp.innerHTML = "▲";
  btnUp.title = "Scroll ke Atas";
  btnUp.style.cssText = `
    width: 40px; height: 40px; border-radius: 50%; border: none;
    background-color: #3f51b5; color: #ffffff;
    cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); font-size: 16px;
    display: none; transition: opacity 0.3s, background-color 0.2s;
  `;

  // Tombol ke Bawah
  const btnDown = document.createElement("button");
  btnDown.innerHTML = "▼";
  btnDown.title = "Scroll ke Bawah";
  btnDown.style.cssText = `
    width: 40px; height: 40px; border-radius: 50%; border: none;
    background-color: #3f51b5; color: #ffffff;
    cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); font-size: 16px;
    transition: opacity 0.3s, background-color 0.2s;
  `;

  // Gabungkan ke kontainer
  scrollContainer.appendChild(btnUp);
  scrollContainer.appendChild(btnDown);
  document.body.appendChild(scrollContainer);

  // Logika Scroll
  window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    // Tampilkan tombol UP jika sudah di-scroll ke bawah lebih dari 200px
    if (scrollTop > 200) {
      btnUp.style.display = "block";
    } else {
      btnUp.style.display = "none";
    }

    // Sembunyikan tombol DOWN jika sudah sampai paling bawah
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      btnDown.style.opacity = "0";
      setTimeout(() => btnDown.style.display = "none", 300);
    } else {
      btnDown.style.display = "block";
      setTimeout(() => btnDown.style.opacity = "1", 50);
    }
  });

  // Aksi Klik
  btnUp.addEventListener("click", function() {window.scrollTo({ top: 0, behavior: "smooth" });});
  btnDown.addEventListener("click", function() {window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });});

  // === 2. KODE GISCUS JAVASCRIPT BANTUAN (BARU) ===
  // Cek agar komentar tidak muncul di halaman utama (homepage)
  if (window.location.pathname !== "/" && window.location.pathname !== "/index.html" && !window.location.pathname.endsWith('/id/') && !window.location.pathname.endsWith('/en/')) {
    
    // Buat elemen penampung komentar di bawah artikel
    const article = document.querySelector("article");
    if (article) {
      const commentDiv = document.createElement("div");
      commentDiv.id = "giscus-comments";
      commentDiv.style.marginTop = "40px";
      commentDiv.innerHTML = "<hr><h3>💬 Diskusi & Komentar</h3>";
      article.appendChild(commentDiv);

      // Buat tag script Giscus secara dinamis
      const giscusScript = document.createElement("script");
      giscusScript.src = "https://giscus.app/client.js";
      giscusScript.setAttribute("data-repo", "mapitds/odoo-user-manual");
      giscusScript.setAttribute("data-repo-id", "MASUKKAN_REPO_ID_ANDA");
      giscusScript.setAttribute("data-category", "Announcements");
      giscusScript.setAttribute("data-category-id", "MASUKKAN_CATEGORY_ID_ANDA");
      giscusScript.setAttribute("data-mapping", "pathname");
      giscusScript.setAttribute("data-strict", "0");
      giscusScript.setAttribute("data-reactions-enabled", "1");
      giscusScript.setAttribute("data-emit-metadata", "0");
      giscusScript.setAttribute("data-input-position", "top");
      giscusScript.setAttribute("data-theme", "preferred_color_scheme");
      giscusScript.setAttribute("data-lang", "id");
      giscusScript.crossOrigin = "anonymous";
      giscusScript.async = true;

      commentDiv.appendChild(giscusScript);
    }
  }
});