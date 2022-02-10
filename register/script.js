
function register(){
    let inputFirstName = document.querySelector("#firstName").value;
    let inputLastName = document.querySelector("#lastName").value;
    let inputAddress = document.querySelector("#inputAddress").value;
    let inputState = document.querySelector("#inputState").value;
    let inputEmail = document.querySelector("#inputEmail").value;
    let inputPassword = document.querySelector("#inputPassword").value;
    let inputConfirmPassword = document.querySelector("#confirmPassword").value;

    let userData = {
        firstName : inputFirstName,
        lastName : inputLastName,
        address : inputAddress,
        gender : inputState,
        email : inputEmail,
        password : inputPassword,
        confirmPassword : inputConfirmPassword,
    }

    localStorage.setItem("user", JSON.stringify(userData))

    if(inputFirstName != "" && inputLastName != "" && inputAddress != "" && inputState != "" && inputEmail != "" && inputPassword != "" && inputConfirmPassword != ""){
        location.replace('../login/index.html')
    }else{
        alert("Isi dulu guys")
    }
}