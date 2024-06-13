//CREATE PRODUCT 
const inputTitle = document.querySelector("[name='title']");	
const inputPrice= document.querySelector("[name='price']");
const inputDiscount = document.querySelector("[name='discount']"); 
const inputImagePrincipal = document.querySelector("[name='imagePrincipal']");
window.addEventListener("load", () => {
    let existError = true;
    const statusInvalid = (elementErr, msgErr, elementInput) => {
        elementErr.innerHTML = msgErr;
        elementInput.classList.add("is-invalid");
        existError = true;
      };
      
  const statusValid = (elementErr, elementInput) => {
    elementErr.innerHTML = null;
    elementInput.classList.add("is-valid");
    elementInput.classList.remove("is-invalid");
    existError = false;
  };

  const errTitle = document.querySelector(".error-title");
  inputTitle.addEventListener("blur", function () {
    const value = this.value.trim();

    switch (true) {
      case !value.length:
        statusInvalid(errTitle, "El titulo es requerido", this);
        break;

      case !exRegAlfanumeric.test(value):
        statusInvalid(errTitle, "El titulo debe ser alfanumérico", this);
        break;

      case value.length < 5 || value.length > 100:
        statusInvalid(
          errTitle,
          "El titulo debe tener un mínimo de 5 caracteres",
          this
        );
        break;

      default:
        statusValid(errTitle, this);
        break;
    }
  });
  inputTitle.addEventListener("focus", function () {
    this.classList.remove("is-valid");
    this.classList.remove("is-invalid");
    errTitle.innerHTML = null;
  });

  const errPrice = document.querySelector(".error-price");
  inputPrecio.addEventListener("blur", function () {
    const value = this.value.trim();
    switch (true) {
      case !value.length:
        statusInvalid(errPrice, "El precio es requerido", this);
        break;

      case isNaN(value):
        errPrice.innerHTML = "El precio debe ser numérico";
        this.classList.add("is-invalid");
        existError = true;
        break;

      case value < 0:
        errPrice.innerHTML = "El precio debe tener un valor positivo";
        this.classList.add("is-invalid");
        existError = true;
        break;

      default:
        errPrice.innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        existError = false;
        break;
    }
  });

  inputPrecio.addEventListener("focus", function () {
    this.classList.remove("is-valid");
    this.classList.remove("is-invalid");
    errPrice.innerHTML = null;
  });


  const errDescription = document.querySelector(".error-description");
  inputDescription.addEventListener("blur", function () {
    const value = this.value.trim();

    switch (true) {
      case !value.length:
        errDescription.innerHTML = "La descripción es requerido";
        this.classList.add("is-invalid");
        existError = true;
        break;

      case !exRegAlfanumeric.test(value):
        errDescription.innerHTML = "La descripción debe ser alfanumérico";
        this.classList.add("is-invalid");
        existError = true;
        break;

      case value.length < 30 || value.length > 500:
        errDescription.innerHTML =
          "La descripción debe tener un mínimo de 30 y un máximo de 500 caracteres";
        this.classList.add("is-invalid");
        existError = true;
        break;

      default:
        errDescription.innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        existError = false;
        break;
    }
  });

  inputDescription.addEventListener("focus", function () {
    this.classList.remove("is-valid");
    this.classList.remove("is-invalid");
    errDescription.innerHTML = null;
  });

  const errImgPrincipal = document.querySelector(".err-img-principal");
  inputImagePrincipal.addEventListener("change", function () {
    console.log(this.files);
    const regExpFiles = /.png|.jpg|.jpeg|.webp|.gif/i;
    const files = Array.from(this.files);

    switch (true) {
      case !files.length:
        errImgPrincipal.innerHTML = "Debes ingresar una imagen principal";
        this.classList.add("is-invalid");
        existError = true;
        break;

      case files.length > 1:
        errImgPrincipal.innerHTML = "No puedes ingresar mas de 1 archivo";
        this.classList.add("is-invalid");
        existError = true;
        break;

      case files.some(
        (file) => !regExpFiles.test(file.name)
      ) /* file (1).rar */:
        errImgPrincipal.innerHTML =
          "El formato de la imagen principal es invalido";
        this.classList.add("is-invalid");
        existError = true;
        break;

      default:
        errImgPrincipal.innerHTML = null;
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
        existError = false;
        break;
    }
  });

  const formCreate = document.querySelector("#form-create-product");
  const errFormGeneral = document.querySelector(".err-form-general");
  const fieldsRequired = document.querySelectorAll(".field-required");
  formCreate.addEventListener("submit", function (event) {
    const isTitle = inputTitle.value?.trim();
    const isPrecio = inputPrecio.value?.trim();
    const isDescription = inputDescription.value?.trim();
    const isChef = inputChef.options[inputChef.selectedIndex].value?.trim();
    const isImagePrincipal = inputImagePrincipal.files.length;
    const isImageSecondary = inputImageSecondary.files.length;
    event.preventDefault();

    switch (true) {
      case !isTitle:
      case !isPrecio:
      case !isDescription:
      case !isChef:
      case !isImagePrincipal:
      case !isImageSecondary:
        existError = true;
        errFormGeneral.innerHTML = "Todos los campos son requeridos";
        errFormGeneral.classList.add("alert", "alert-danger");
        fieldsRequired.forEach((field) => (field.innerHTML = "*"));
        break;
    }

    if (!existError) {
      this.submit();
    }
  });
});
