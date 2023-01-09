var elForm = document.querySelector('form'),
    emailFeild = elForm.querySelector('.email-field'),
    emailInput = emailFeild.querySelector('.email'),
    passField = elForm.querySelector('.create-password'),
    passInput = passField.querySelector('.password'),
    cPassField  = elForm.querySelector('.confirm-password'),
    cPassInput = cPassField.querySelector('.cPassword');

    function checkEmail() {
var emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(!emailInput.value.match(emaiPattern)){
 return emailFeild.classList.add('invalid')
}
emailFeild.classList.remove('invalid')
    }
var eyeIcons = document.querySelectorAll('.show-hide')
eyeIcons.forEach(eyeIcons =>{
    eyeIcons.addEventListener('click',() =>{
        var pInput = eyeIcons.parentElement.querySelector('input')
        if(pInput.type === 'password'){
            eyeIcons.classList.replace('bx-hide','bx-show')
return pInput.type = 'text'
        }
        eyeIcons.classList.replace('bx-show','bx-hide')
        return pInput.type = 'password'
    })
})
function createPass(){
var passPattern =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
if(!passInput.value.match(passPattern)){
   return passField.classList.add('invalid')
}
 passField.classList.remove('invalid')

}


function confirmPass(){
    if(passInput.value !==cPassInput.value || cPassInput.value === ''){
            return cPassField.classList.add('invalid')
    }
     cPassField.classList.remove('invalid')

}

    elForm.addEventListener('submit', (e)=>{
e.preventDefault() ;
checkEmail();
createPass()
confirmPass()

emailInput.addEventListener('keyup',checkEmail)
passInput.addEventListener('keyup',createPass)
cPassInput.addEventListener('keyup',createPass)
if(
    !emailFeild.classList.contains('invalid') &&
    !passField.classList.contains('invalid')   &&
    !cPassField.classList.contains('invalid')
    ){
         location.href = elForm.getAttribute('action')
    }
    })
    