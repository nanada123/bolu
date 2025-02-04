

// Fungsi untuk menutup pop-up
function closePopup() {
  document.querySelector('.popup').style.display = 'none';
}

// Fungsi untuk menampilkan pop-up
function showPopup() {
  document.querySelector('.popup').style.display = 'flex'; // Pastikan menggunakan 'flex'
}

// Menambahkan event listener untuk tombol "Beli"
document.getElementById('buyButton1').addEventListener('click', showPopup);
document.getElementById('buyButton2').addEventListener('click', showPopup);
document.getElementById('buyButton3').addEventListener('click', showPopup);

function selectPayment(method) {
  alert("Anda memilih metode pembayaran: " + method);
  closePopup(); // Menutup pop-up setelah memilih
}