
var nameInput = document.getElementById("nameInputt")
var emailInput = document.getElementById("emailInputt")
var passwordInput = document.getElementById("passwordInputt")


var x = JSON.parse(localStorage.getItem("userContainer"))
console.log(x);


var newUserList = []

if (localStorage.getItem('userContainer') == null) {
    newUserList = []
} else {
    newUserList = JSON.parse(localStorage.getItem('userContainer'))
}



function isEmailExist() {
    for (var i = 0; i < newUserList.length; i++) {
        if (newUserList[i].email.toLowerCase() == emailInput.value.toLowerCase()) {
            return false
        }
    }
}

function isEmpty() {

        if (nameInput.value == "" || emailInput.value == "" || passwordInput.value == "") {
            return false
        } else {
            return true
        }
    }
    


function signUp() {
    if (isEmpty() == false) {
            document.getElementById('exist').innerHTML = '<span class="text-danger m-3 text-center">All inputs is required</span>'
            return false
        }
       
    var user = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        }
        if (newUserList.length == 0) {
            newUserList.push(user)
            localStorage.setItem('userContainer', JSON.stringify(newUserList))
            document.getElementById('exist').innerHTML = '<span class="text-success  text-center m-3">Success</span>'
            return true
        }
        if (isEmailExist() == false) {
            document.getElementById('exist').innerHTML = '<span class="text-danger  text-center m-3">email already exists</span>'
    
        } else {
            newUserList.push(user)
            localStorage.setItem('userContainer', JSON.stringify(newUserList))
            document.getElementById('exist').innerHTML = '<span class="text-success  text-center m-3">Success</span>'
    
        }
    
    
    }


function clearForm(){
    emailInput.value = null
    nameInput.value = null
    passwordInput.value = null
}



// login 
var emailInputlog = document.getElementById("emailInput")
var passwordInputlog = document.getElementById("passwordInput")

var x = JSON.parse(localStorage.getItem("userContainer"))
console.log(x);

function isLoginEmpty() {

    if (passwordInputlog.value == "" || emailInputlog.value == "") {
        return false
    } else {
        return true
    }
}

function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger  text-center m-3">All inputs is required</span>'
        return false
    }
    var password = passwordInputlog.value
    var email = emailInputlog.value
    for (var i = 0; i < x.length; i++) {
        if (x[i].email.toLowerCase() == email.toLowerCase() && x[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', x[i].name)
            if (baseURL == '/') {
                location.replace('https://' + location.hostname + '/home.html')

            } else {
                location.replace(baseURL + '/home.html')

            }
        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2  text-center text-danger">incorrect email or password</span>'
        }
    }

}









function log() {
    window.location.href = "home.html"
}
