

// Array of images
const images = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.jpg',
    'image7.jpg'
];

// Function to change image
let currentIndex = 0;
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('image').src = images[currentIndex];
}







// Function to handle image download
function downloadImage() {
    // Show the loading spinner
    document.getElementById('loading').style.display = 'flex';
    document.querySelector('.change-btn').disabled = true; // Disable button during download

    // Simulate download process (replace this with actual download logic)
    setTimeout(function() {
        // Trigger file download
        const link = document.createElement('a');
        link.href = document.getElementById('image').src; // Image source URL
        link.download = 'downloaded_image.png'; // Desired file name
        link.click();

        // Hide loading spinner after download
        document.getElementById('loading').style.display = 'none';
        document.querySelector('.change-btn').disabled = false; // Re-enable button
    }, 2000); // Simulate 2 seconds download time
}
document.querySelector('#download-link').addEventListener('click', function(e) {
    // Cegah link default untuk membuka file
    e.preventDefault();

    // Buat elemen <a> dinamis untuk memulai download
    var link = document.createElement('a');
    link.href = this.href;
    link.download = 'wahyu-icon.png';  // Nama file saat diunduh
    document.body.appendChild(link);  // Menambahkan link ke DOM
    link.click();  // Memulai proses download
    document.body.removeChild(link);  // Menghapus link setelah unduhan dimulai
});


