function validate(){

    if(document.formfill.uname.value===""){
           document.getElementById("error").innerHTML="enter the username"
           return false
       }else if(document.formfill.email.value===""){
        document.getElementById("error").innerHTML="enter the email"
        return false
    }
       else if(document.formfill.password.value===""){
           document.getElementById("error").innerHTML="enter the password"
           return false
       }else if(document.formfill.cpassword.value===""){
        document.getElementById("error").innerHTML="enter the confim password"
        return false
    }
      else if(document.formfill.password.value!==document.formfill.cpassword.value){
        document.getElementById("error").innerHTML="password is not match"
        return false
    } 
    else if(document.formfill.password.value <8){
        document.getElementById("errortwo").innerHTML="password atlest 8 charters"
        return false
    }
       else{
           window.location.href="add.html"
           alert("signup successfly enter the ok")
          
       }
   }

