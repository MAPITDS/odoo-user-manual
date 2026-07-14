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
    background-color: var(--md-primary-color); color: var(--md-primary-bg-color);
    cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-size: 16px;
    display: none; transition: opacity 0.3s;
  `;

  // Tombol ke Bawah
  const btnDown = document.createElement("button");
  btnDown.innerHTML = "▼";
  btnDown.title = "Scroll ke Bawah";
  btnDown.style.cssText = `
    width: 40px; height: 40px; border-radius: 50%; border: none;
    background-color: var(--md-primary-color); color: var(--md-primary-bg-color);
    cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-size: 16px;
    transition: opacity 0.3s;
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
  btnUp.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  btnDown.addEventListener("click", function() {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  });
});
