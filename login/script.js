function masuk(){
    
    let userEmail = document.querySelector('.userEmail').value;
    let userPassword = document.querySelector('.userPassword').value;
    
    let dataMasuk = {
        emailLogin : userEmail,
        passwordLogin : userPassword,
    }
    localStorage.setItem('login', JSON.stringify(dataMasuk))

    const dataLocalStorage = JSON.parse(localStorage.getItem("user"));

    if(userEmail == dataLocalStorage.email && userPassword == dataLocalStorage.password){
        alert('Kamu berhasil login')
        location.replace('../halamanAwal/index.html')
    } else{
        alert('Cek Ulang Email & Password')
    }
}

let login = document.getElementById('login');
function berubahPutih(){
    login.style.backgroundColor = '#ffffff'
    login.style.color = '#007E33'
}

function kembaliHijau(){
    login.style.backgroundColor = '#007E33'
    login.style.color = '#ffffff'
}

let register = document.getElementById('register');
function berubah(){
    register.style.backgroundColor = '#007E33'
    register.style.color = '#ffffff'
}

function kembaliPutih(){
    register.style.backgroundColor = '#ffffff'
    register.style.color = '#007E33'
}
