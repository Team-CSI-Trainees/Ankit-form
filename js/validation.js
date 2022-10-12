var a = false;
var a = false;
var b = false;
var c = false;
var d = false;
var e = false;
var f = false;
document.getElementById('First_Name').addEventListener("blur", () => {

    let fname = document.getElementById("First_Name").value;
    let fnamereg = /^[a-zA-Z ]+$/;

    if (fnamereg.test(fname)) {
        a = true;
        clearerror();
    }
    else {
        let element = document.getElementById('First_Name');
        element.parentNode.nextElementSibling.innerHTML = "First name should have alphabets only";
        a = false;
    }
});

document.getElementById('Last_Name').addEventListener("blur", () => {

    let lname = document.getElementById("Last_Name").value;
    let lnamereg = /^[a-zA-Z]+$/;

    if (lnamereg.test(lname)) {
        b = true;
        clearerror();
    }
    else {
        let element = document.getElementById('Last_Name');
        element.parentNode.nextElementSibling.innerHTML = "Last name should have alphabets only";
        b = false;
    }
})

document.getElementById('Mobile_No').addEventListener("blur", () => {

    let mobile = document.getElementById("Mobile_No").value;
    let mobilereg = /^\d{10}$/;

    if (mobilereg.test(mobile)) {
        c = true;
        clearerror();
    }
    else {
        let element = document.getElementById('Mobile_No');
        element.parentNode.getElementsByClassName('displayerror')[0].innerHTML = "Mobile number should be 10 digit number";
        c = false;
    }

})

document.getElementById('Email_Address').addEventListener("blur", () => {

    let email = document.getElementById("Email_Address").value;
    let emailreg = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z]+)\.([a-zA-Z]{2,4})$/;

    if (emailreg.test(email)) {
        d = true;
        clearerror();
    }
    else {
        let element = document.getElementById('Email_Address');
        element.parentNode.getElementsByClassName('displayerror')[0].innerHTML = "Email should be of form abc.cd@gmail.com";
        d = false;
    }

})

document.getElementById('Password').addEventListener("blur", () => {

    let pass = document.getElementById("Password").value;
    let passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (passreg.test(pass)) {
        e = true;
        clearerror();
    }
    else {
        let element = document.getElementById('Password');
        element.parentNode.getElementsByClassName('displayerror')[0].innerHTML = "Password should be atleast 8 letters containing capital letter,small letter, number and special character";
        e = false;
    }
})

document.getElementById('C_Password').addEventListener("blur", () => {

    let cpass = document.getElementById("C_Password").value;
    let pass = document.getElementById("Password").value;

    if (cpass == pass) {
        f = true;
        clearerror();
    }
    else {
        let element = document.getElementById('C_Password');
        element.parentNode.getElementsByClassName('displayerror')[0].innerHTML = "Both Password should match";
        f = false;
    }

})

function clearerror() {
    let errors = document.getElementsByClassName('displayerror');
    for (let i of errors) {
        i.innerHTML = "";
    }
}

// After Submit Button

function validate() {

    let fname = document.getElementById("First_Name").value;
    let lname = document.getElementById("Last_Name").value;
    let mobile = document.getElementById("Mobile_No").value;
    let email = document.getElementById("Email_Address").value;
    let pass = document.getElementById("Password").value;
    let cpass = document.getElementById("C_Password").value;
    let cours = document.getElementById('course').value;

    var y = false;
    y = a && b && c && d && e && f;
    if (y == true) {
        console.log(fname);
        console.log(lname);
        console.log(mobile);
        console.log(email);
        console.log(cours);
        alert("Your Form Is Successfully Submitted");
    }
    return y;

}
