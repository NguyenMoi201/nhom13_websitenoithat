function check(){
    document.getElementById("appear").setAttribute("class","far fa-eye");
    document.getElementById("pass").setAttribute('type','text');

}
function hide(){
    document.getElementById("appear").setAttribute("class","fas fa-eye-slash");
    document.getElementById("pass").setAttribute('type','password');
    
}

// const passField=document.querySelector("input");
// const show_pass=document.querySelector("i");
//     if(passField.type==="password"){
//             //show_pass.classList.add()
//             alert("helo");
//             show_pass.onclick=(()=>{
//                 show_pass.classList.replace("far-eye-slash,far fa-eye");
//                // show_pass.classList.remove("far-eye-slash");
//                 document.getElementById("pass").setAttribute('type','text');
//             });
            
//         }
//         else{
//             show_pass.onclick=(()=>{
//                 show_pass.classList.replace("far fa-eye,far-eye-slash");
//             //show_pass.classList.add("far-eye-slash");
//                 document.getElementById("pass").setAttribute('type','password');
//             });
            
//         }
        
   