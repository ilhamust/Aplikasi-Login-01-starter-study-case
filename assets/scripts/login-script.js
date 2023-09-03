/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// Membuat variabel untuk setiap elemen view.
const loginFormElement = document.querySelector("#loginForm");
const inputEmailElement = document.querySelector("#inputEmail");
const inputPasswordElement = document.querySelector("#inputPassword");

// Variabel untuk menyimpan informasi email dan password
const expectedEmail = "admin@dicoding.com";
const expectedPassword = "superpassword";

//Menambahkan aksi klik pada button
loginFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  // TODO 1 : Mendapatkan input email dan password pengguna dari form.
  // Menambahkan nilai dari setiap input ketika tombol ditekan
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */

  //Memastikan nilai email dan password sesuai nilai tersimpan
  if (email == expectedEmail && password == expectedPassword) {
    // Jika sesuai maka program akan berpindah ke halaman home
    goToHome();
  } else {
    // namun jika tidak sesuai maka menampilkan informasi kode salah
    showPopUp();
  }
});
