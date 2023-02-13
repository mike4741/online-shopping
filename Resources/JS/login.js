// class OnlineShopping{

//     goToLogin(){
        
//     }
// }



// function f1() {
//     var inputText = document.getElementById("email").value;
//     var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     if (inputText.value.match(mailformat)) {
//         document.form1.text1.focus();

//     }
//     else {
//         alert("You have entered an invalid email address!");
//         document.form1.text1.focus();
//         event.preventDefault();
//     }
// }


document.getElementById("registerId1").onclick = function () {
  location.href = "./userRegister.html";
};

document.getElementById("registerId2").onclick = function () {
  location.href = "./userRegister.html";
};

const loginButton = document.getElementById("login");


loginButton.addEventListener("click", (e) => {

     e.preventDefault();
    let useremail = document.getElementById('exampleInputEmail1').value;
    let password = document.getElementById('exampleInputPassword1').value;

    if(useremail !="mike@gmail.com" || password !="password"){
            alert("In valid username or password!");   
           }

     if(useremail ==="mike@gmail.com" && password ==="password"){
      
        window.location.replace("cart.html");
      
       
    }
    // document.getElementById("email-label-id").value = "asdf";
     
   }



);


 







