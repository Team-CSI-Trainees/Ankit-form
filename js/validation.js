function validate(){
    var y=false;
    console.log("hello");
    let fname=document.getElementById("First_Name").value;
    
    let lname=document.getElementById("Last_Name").value;
    console.log(lname)
    let mobile=document.getElementById("Mobile_No").value;
    let email=document.getElementById("Email_Address").value;
// console.log(fname)
    console.log(mobile);

    let mobilereg=/^\d{10}$/;
    let fnamereg=/^[a-zA-Z]+$/;
    let lnamereg=/^[a-zA-Z]+$/;
    let emailreg=/([a-zA-Z0-9\.]+)@([a-zA-Z]+).([a-zA-Z]{2,4})$/

    

    if(fnamereg.test(fname))
    {
        y=true;
    }
    else{
    let element=document.getElementById('First_Name');
    element.parentNode.nextElementSibling.innerHTML="First name should have alphabets only";
     }

    if(lnamereg.test(lname))
    {
        y=true;
    }
    else{
    let element=document.getElementById('Last_Name');
    element.parentNode.nextElementSibling.innerHTML="Last name should have alphabets only";
    }


    if(mobilereg.test(mobile))
    {
       y=true;
    }
    else{
        let element=document.getElementById('Mobile_No');
        element.parentNode.getElementsByClassName('displayerror')[0].innerHTML="Mobile number should be 10 digit number";
}

    if(emailreg.test(email))
    {
       y=true;
    }
    else{
        let element=document.getElementById('Email_Address');
        element.parentNode.getElementsByClassName('displayerror')[0].innerHTML="Email should be of form abc.cd@gmail.com";
}

    

let element=document.getElementById('First_Name');
element=element.getElementsByClassName('displayerror');
console.log(element);
element.innerHTML='hello';
// element.innerHTML="helo bhai";
return false;
}
