function masuk(){
    
    let userEmail = document.querySelector('.userEmail').value;
    let userPassword = document.querySelector('.userPassword').value;
    
    // let dataMasuk = {
    //     emailLogin = userEmail,
    //     passwordLogin = userPassword,
    // }
    // localStorage.setItem('login', JSON.stringify(dataMasuk))

    const dataLocalStorage = JSON.parse(localStorage.getItem("user"));

    if(userEmail == dataLocalStorage.email && userPassword == dataLocalStorage.password){
        alert('Kamu berhasil login')
        location.replace('../halamanAwal/index.html')
    } else{
        alert('Cek Ulang Email & Password')
    }
}