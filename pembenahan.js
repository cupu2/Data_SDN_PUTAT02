// script.js

document.getElementById('updateForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Mencegah halaman dari reload setelah form disubmit

    // Ambil nilai input
    var nama = document.getElementById('nama').value;
    var tanggalLahir = document.getElementById('tanggalLahir').value;

    // Menampilkan data yang dimasukkan (misalnya, di console)
    console.log('Nama: ' + nama);
    console.log('Tanggal Lahir: ' + tanggalLahir);

    // Anda bisa mengirim data ini ke server atau menyimpannya dalam localStorage/Database
    alert('Data berhasil disimpan!');
});


// Menangani pengiriman form
document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form reload
    alert("Data berhasil dikirim!");
    
    // Menambahkan link menuju Google Sheets setelah form dikirim
    // Gantilah URL di bawah dengan URL Google Sheets Anda
    window.location.href = ''; // Link ke Google Sheets
});


        document.getElementById('updateForm').addEventListener('submit', function(event) {
            event.preventDefault();  // Mencegah form reload
            alert("Data berhasil dikirim!");
        });
    