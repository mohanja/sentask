

// const form=document.querySelector('#form')
// const email=document.querySelector('#email')
// const pass=document.querySelector('#password')



// // function sumbit(event){
// //     event.preventDefault()
// //     var value=document.getElementById("email").value
// //     console.log(value)
// // }

// form.addEventListener('sumbit',(event)=>{
//     event.preventDefault()
//     answer()
     
// })

// function answer(){
//     const emailvale=email.value.trim()
//     const passvale=pass.value.trim()


//     if(emailvale===''){
//         seterror(email,"email is required")
//     }else if(!validate(email)){
//         seterror(email,"email is required")
//     }else{
//         setsuccess(email)
//     }

//     if(passvale===''){
//         seterror(pass,"email is required")
//     }else if(passvale.length<8){
//         seterror(pass,"email is required")
//     }else{
//         setsuccess(pass)
//     }
// }

// function seterror(element,message){
// const inputg=element.parentElement;
// const errorele=inputg.querySelector('.error')

// errorele.innerText=message;
// inputg.classList.add("error")
// inputg.classList.remove("success")
// }

// function setsuccess(element){
//     const inputg=element.parentElement;
//     const errorele=inputg.querySelector(".error")
    
//     errorele.innerText='';
//     inputg.classList.add("success")
//     inputg.classList.remove("error")
//     }

//     const validate=(email)=>{
//         return String(email)
//         .toLocaleLowerCase()
//         .match(
//             /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//         )
//     }


function validate(){

 if(document.formfill.email.value===""){
        document.getElementById("error").innerHTML="enter the email"
        return false
    }else if(document.formfill.password.value===""){
        document.getElementById("errortwo").innerHTML="enter the password"
        return false
    }
    else if(document.formfill.password.value <8){
        document.getElementById("errortwo").innerHTML="password atlest 8 charters"
        return false
    }else{
        window.location.href="add.html"
        alert("login successfly enter the ok")
    }
}
