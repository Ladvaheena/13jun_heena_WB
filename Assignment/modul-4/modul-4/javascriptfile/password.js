function check(){
    let pass = document.getElementById('password')
    let check= document.getElementById('checkbox')
    if(check.checked){
        pass.type = "text";
    }
    else{
        pass.type = "password";

    }
}