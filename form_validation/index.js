
document.querySelector(".formSubmit").addEventListener('click',(e)=>{
    e.preventDefault();
    
const username = document.getElementById('username').value
const phonenumber = document.getElementById('phonenumber').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const confirm_password = document.getElementById('confirmpassword').value

// Regular Expression

const usernameregx = /^[A-Za-z0-9 ]{3,20}$/
const passwordregx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/
const emailregx = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/
const phonenumberregx =/^[6-9][\d]{9}$/ 

// clear previos error 
document.querySelectorAll(".error").forEach((curele)=> curele.textContent = "")

// to check the overall info is filled correctly by user
let isValid = true;

// Validate Username

if(!usernameregx.test(username)){
    document.getElementById('usernameError').textContent= "User name is not valid!!"
    isValid = false;
}

// Validate phonenumber 
if(!phonenumberregx.test(phonenumber)){
    document.getElementById('phonenumberError').textContent = "phone-number invalid"
    isValid = false
}

// validate email
if(!emailregx.test(email)){
    document.getElementById('emailError').textContent = "email invaild"
    isValid = false
}

// Validate Password 
if(!passwordregx.test(password)){
    document.getElementById('passwordError').textContent = "Password invalid, must be atleast 8 characters"
    isValid = false;
}

// checking password and confirmpassword are equal or not
if(password !== confirm_password){
    document.getElementById('confirmpasswordError').textContent = "password and confirmspassword does'nt match, please check!!"
    isValid = false
}
   
    let userData = []
    if(isValid){
        let formClass = document.getElementsByClassName('form-control')
        Array.from(formClass).forEach((currelem)=> userData.push(currelem.value))
        Array.from(formClass).forEach((currelem)=> currelem.value = "")
        console.log(userData)
        alert("Registration Successful")
    }
}
)


