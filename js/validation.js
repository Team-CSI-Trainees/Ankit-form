function validate(){
    var y=false;
    var a=false;
    var b=false;
    var c=false;
    var d=false;
    var e=false;
    var f=false;
    console.log(a);
    // comsole.log(c);
    clearerror();
    let fname=document.getElementById("First_Name").value;
    let lname=document.getElementById("Last_Name").value;
    let mobile=document.getElementById("Mobile_No").value;
    let email=document.getElementById("Email_Address").value;
    let pass=document.getElementById("Password").value;
    let cpass=document.getElementById("C_Password").value;
 
    let mobilereg=/^\d{10}$/;
    let fnamereg=/^[a-zA-Z]+$/;
    let lnamereg=/^[a-zA-Z]+$/;
    let emailreg=/^([a-zA-Z0-9\.-_]+)@([a-zA-Z]+).([a-zA-Z]{2,4})$/;
    let passreg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if(fnamereg.test(fname))
    {
        a=true;
    }
    else{
    let element=document.getElementById('First_Name');
    element.parentNode.nextElementSibling.innerHTML="First name should have alphabets only";
    a=false;
     }

    if(lnamereg.test(lname))
    {
        b=true;
    }
    else{
    let element=document.getElementById('Last_Name');
    element.parentNode.nextElementSibling.innerHTML="Last name should have alphabets only";
    b=false;
    }


    if(mobilereg.test(mobile))
    {
       c=true;
    }
    else{
        let element=document.getElementById('Mobile_No');
        element.parentNode.getElementsByClassName('displayerror')[0].innerHTML="Mobile number should be 10 digit number";
        c=false;
}

    if(emailreg.test(email))
    {
       d=true;
    }
    else{
        let element=document.getElementById('Email_Address');
        element.parentNode.getElementsByClassName('displayerror')[0].innerHTML="Email should be of form abc.cd@gmail.com";
        d=false;
}

    if(passreg.test(pass))
    {
       e=true;
    }
    else{
        let element=document.getElementById('Password');
        element.parentNode.getElementsByClassName('displayerror')[0].innerHTML="Password should be atleast 8 letters containing capital letter,small letter, number and special character";
        e=false;
        }

    if(cpass==pass)
    {
       f=true;
    }
    else{
        let element=document.getElementById('C_Password');
        element.parentNode.getElementsByClassName('displayerror')[0].innerHTML="Both Password should match";
        f=false;
}


 if(a&&b&&c&&d&&e&&f){
    y=true;
    return y;
 }

function clearerror(){
    let errors=document.getElementsByClassName('displayerror');
    for(let i of errors)
    {
        i.innerHTML="";
    }
}
return y;
}
