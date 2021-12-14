function validate(){
    const regEmail= /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    const regPass= /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#%&*_?])([a-zA-Z0-9!@#%&*_?]{8,})$/;
    var name=document.create_user.username.value;
    var mail=document.create_user.email.value;
    var pass1=document.create_user.password.value;
    var pass2=document.create_user.password_again.value;
    
    if(name==""){
        alert("Tên đăng nhập không được bỏ trống ");
    } 
     if(mail==""){
        
        alert("Email không được bỏ trống ");

    }
    
     if(pass1==""){
       alert("Mật khẩu không được để trống");
    } 
    if(pass2==""){
       alert("Xác nhận lại mật khẩu");
    } 
    if(!regEmail.test()){
        alert("Email không hợp lệ");
    }
     
    if(!regPass.test(pass1)){
        alert("Mật khẩu chưa đạt yêu cầu");
    } 
    if(pass1!=pass2){
        alert("Mật khẩu không khớp");

    } 
    
    

}

