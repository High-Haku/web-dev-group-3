

function deletLogin(){
    localStorage.removeItem('login');
    location.replace('../login/index.html')
}

let getLogin = JSON.parse(localStorage.getItem("login"))
let sateAyam = document.querySelector('#sateAyam');
sateAyam.onclick = sate;
function sate (){
    if(getLogin){
        location.replace('../resepFavorite/sateAyam/index.html')
    }else{
        alert('Login dulu');
        location.replace('../login/index.html')
    }
}