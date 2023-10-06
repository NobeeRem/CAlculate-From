function CVE(){
    let inputAge = document.getElementById("inputAge").value;
    if(inputAge === ""){
        return document.getElementById("result").textContent = "please enter an age";
    }
    else if (inputAge >= 18){
        return document.getElementById("result").textContent = "You are eligible to vote!";

    }else if (inputAge < 18){
        return document.getElementById("result").textContent = "Sorry you are not eligible to vote yet";

    }
    else {
        return document.getElementById("result").textContent = "wrong data type";
    
    }
}