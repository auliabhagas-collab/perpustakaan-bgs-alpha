function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  document.getElementById(id).style.display = 'block';

  document.querySelectorAll('.sidebar button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

/* DARK / LIGHT MODE */
const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.innerText = "🌙 Dark Mode";
  } else {
    toggle.innerText = "☀️ Light Mode";
  }
});
/* ===============================
   MODAL BUKU INTERAKTIF
================================ */
const modal = document.getElementById("modalBuku");
const modalJudul = document.getElementById("modalJudul");
const modalKategori = document.getElementById("modalKategori");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".buku-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    modalJudul.textContent = icon.dataset.judul;
    modalKategori.textContent = icon.dataset.kategori;
    modal.style.display = "block";
  });
});

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
/* ===============================
   MODAL DATA ANGGOTA
================================ */
const modalAnggota = document.getElementById("modalAnggota");
const namaA = document.getElementById("anggotaNama");
const roleA = document.getElementById("anggotaRole");
const statusA = document.getElementById("anggotaStatus");
const idA = document.getElementById("anggotaID");
const closeA = document.querySelector(".closeAnggota");

document.querySelectorAll(".anggota-card").forEach(card => {
  card.addEventListener("click", () => {
    namaA.textContent = card.dataset.nama;
    roleA.textContent = card.dataset.role;
    statusA.textContent = card.dataset.status;
    idA.textContent = card.dataset.id;
    modalAnggota.style.display = "block";
  });
});

closeA.onclick = () => modalAnggota.style.display = "none";
window.addEventListener("click", e => {
  if (e.target === modalAnggota) modalAnggota.style.display = "none";
});
/* ===============================
   MODAL LAYANAN LITERASI
================================ */
const modalLayanan = document.getElementById("modalLayanan");
const layananTitle = document.getElementById("layananTitle");
const layananDesc = document.getElementById("layananDesc");
const closeLayanan = document.querySelector(".closeLayanan");

document.querySelectorAll(".layanan-card").forEach(card => {
  card.addEventListener("click", () => {
    layananTitle.textContent = card.dataset.title;
    layananDesc.textContent = card.dataset.desc;
    modalLayanan.style.display = "block";
  });
});

closeLayanan.onclick = () => modalLayanan.style.display = "none";
window.addEventListener("click", e => {
  if (e.target === modalLayanan) modalLayanan.style.display = "none";
});