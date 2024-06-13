
const errorPassword = document.querySelector("#err-password");
const errorEmail = document.querySelector(".err-email");
//EMAIL
const inputEmail = document.querySelector("[name='email']")
window.addEventListener("load", () => {   
    inputEmail.addEventListener("blur",function(){
        const value = this.value.trim();

        switch(true){

            case value.length === 0:
                errorEmail.innerHTML = "El campo no puede estar vacío";
            this.classList.add("is-invalid");
            break;

            case !isNotEmail.test(value):
                errorEmail.innerHTML = "Formato no valido";
            this.classList.add("is-invalid");
            break;

            default:
                errorEmail.innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
            break;
        }
    })
})

//PASSWORD
window.addEventListener("load",() => {
    const inputPass = document.querySelector("#password");
    const btnEye = document.querySelector("#btn-eye");
    const iconEye = document.querySelector("#icon-eye");

    btnEye.addEventListener("click", () => {
        isActive = iconEye.classList.contains("fa-eye-slash");

        if(isActive){
            inputPass.type = "password";	
        } else {
            inputPass.type = "text";
        }
        iconEye.classList.toggle("fa-eye-slash");
        iconEye.classList.toggle("fa-eye");
    });
});

const inputPassword = document.querySelector("[name='password']");
window.addEventListener("load", () => {
    inputPassword.addEventListener("blur",function(){
        const value = this.value.trim();
        const errPassword = document.querySelector(".err-password");

        switch(true){
            case value.length === 0:
            errPassword.innerHTML = "El campo no puede estar vacío";
            this.classList.add("is-invalid");
            break;

            default:
            errPassword.innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
            break;
    }
 })
})