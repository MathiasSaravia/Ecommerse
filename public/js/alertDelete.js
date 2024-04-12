const openAlert = document.querySelector('.btn-danger');
const alert = document.querySelector('.alert-delete');
const closeAlert = document.querySelector('.btn-cancel');

openAlert.addEventListener('click',(e)=>{
    e.preventDefault();
    alert.classList.add('.alert-delete--show')
})

closeAlert.addEventListener('click',(e)=>{
    e.preventDefault();
    alert.classList.remove('.alert-delete--show')
})