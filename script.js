

function deletLogin(){
    localStorage.removeItem('login');
    location.replace('./index.html')
}

let getLogin = JSON.parse(localStorage.getItem("login"))
let sateAyam = document.querySelector('.sateAyam');
sateAyam.onclick = sate;
function sate (){
    if(getLogin){
        location.replace('./resepFavorite/sateAyam/index.html')
    }else{
        let goLogin = confirm('Login Dulu Guys')
        if(goLogin){
            location.replace('./login/index.html')
        }   
    }
}

let resep = document.querySelector('#resep')
let loginRegister = document.querySelector('#register')
let dropMenu = document.querySelector('#dropMenu')

if(getLogin){
    loginRegister.style.display = 'none'
}else{
    dropMenu.style.display = 'none'
}

let indonesia = document.querySelector('#ind')
let western = document.querySelector('#west')

function indFood(){
    if(getLogin){
        location.replace('./listResep/indonesiaResep/index.html')//jgn lupa di ubah ke list resept
    }else{
        let goLogin = confirm('Login Dulu Guys')
        if(goLogin){
            location.replace('../login/index.html')
        }   
    }
}

function westertFood(){
    if(getLogin){
        location.replace('./listResep/westernResep/index.html')//jgn lupa di ubah ke list resep
    }else{
        let goLogin = confirm('Login Dulu Guys')
        if(goLogin){
            location.replace('../login/index.html')
        }   
    } 
}