function printError(elemId,hintMsg){
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateSignUpInputCredentials(){
    username=document.getElementById("name").value;
    email=document.getElementById("email").value;
    password= document.getElementById("password").value;
    confirmpassword=document.getElementById("confirm_password").value;
    var nameErr = emailErr = passwordErr = confirmPasswordErr = true;

    if(username ==""){
        printError("nameErr","Please enter your Name");
    }
    else{
        var regex = /^[A-Za-z ]+$/;
        if(regex.test(username)=== false){
            printError("nameErr","Please enter a valid Name ");
        }
        else{
            printError("nameErr","");
            nameErr = false;
        }
    }
    if(email ==""){
        printError("emailErr","Please enter your Email");
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email)=== false){
            printError("emailErr","Please enter a valid Email ");
        }else{
            printError("emailErr","");
            emailErr = false;
        
        }
    }
    if(password ==""){
        printError("passwordErr","Please enter your password");
    }else{
        printError("passwordErr","");
        passwordErr = false;
    }

        
    
    if(confirmpassword ==""){
        printError("confirmPasswordErr"," confirm your password");
    } else{
        printError("confirmPasswordErr","");
        confirmPasswordErr = false;
    }

       
    
    if((nameErr || emailErr || passwordErr || confirmPasswordErr) == true){
        return false;
    }else{
        return true;
    }

}
function validateLoginInputCredentials(){
    email=document.getElementById("email").value;
    password= document.getElementById("password").value;
    var emailErr = passwordErr = true;
    if(email ==""){
        printError("emailErr","Please enter your email address");
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email)=== false){
            printError("emailErr","Please enter a valid Email ");
        }else{
            printError("emailErr","");
            emailErr = false;
        
        }
    
    }
    if(password ==""){
        printError("passwordErr","Please enter your password");
    }else{
        printError("passwordErr","");
        passwordErr = false;
    }
}