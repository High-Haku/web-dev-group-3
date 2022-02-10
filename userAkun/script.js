
let tampilkan = JSON.parse(localStorage.getItem('user'))

document.getElementById('namaDepan').innerHTML = tampilkan.firstName
document.getElementById('namaBelakang').innerHTML = tampilkan.lastName
document.getElementById('alamat').innerHTML = tampilkan.address
document.getElementById('gender').innerHTML = tampilkan.gender
document.getElementById('email').innerHTML = tampilkan.email
document.getElementById('password').innerHTML = tampilkan.password