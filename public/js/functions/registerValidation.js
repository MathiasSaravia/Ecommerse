const inputName = document.querySelector("[name='name']");
const inputSurname = document.querySelector("[name='surname']");
const formRegister = document.querySelector("#form-register");
const errorGeneral = document.querySelector("#error-general");

//PASSWORD REGISTER
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

            case value.length < 8:
            errPassword.innerHTML = "Debe tener al menos 8 caracteres";
            this.classList.add("is-invalid");
            break;

            case value.length > 16:
            errPassword.innerHTML = "Debe tener menos de 15 caracteres";
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

//EMAIL
const isNotEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const inputEmail = document.querySelector("[name='email']")
window.addEventListener("load", () => {   
    inputEmail.addEventListener("blur",function(){
        const value = this.value.trim();
        const errEmail = document.querySelector(".err-email");
        switch(true){

            case value.length === 0:
            errEmail.innerHTML = "El campo no puede estar vacío";
            this.classList.add("is-invalid");
            break;

            case !isNotEmail.test(value):
            errEmail.innerHTML = "Formato no valido";
            this.classList.add("is-invalid");
            break;

            default:
            errEmail.innerHTML = null;
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
            break;
        }
    })
})

//SUBMIT REGISTER

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = inputName.value.trim();
    const surname = inputSurname.value.trim();
    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();
    if (name === "" || surname === "" || email === "" || password === "") {
        errorGeneral.innerHTML = "Por favor completa todos los campos";
    } else {
        formRegister.submit();
    }
});

