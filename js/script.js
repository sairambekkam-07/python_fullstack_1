let registerForm = document.getElementById("registerForm")
if(registerForm){
    registerForm.addEventListener("submit",function(event){
        event.preventDefault();
        console.log(event);
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let data=document.getElementById("data").checked;
        let male=document.getElementById("male").checked;
        let female=document.getElementById("female").value;
        let course=document.querySelector('input[name="course"]:checked').value;
        let gender="";
        if(male){
            gender="male";

        }else if(female){
            gender="female";
        }
        if (name == "" || email ==  ""  ||  password == "" ||data == "" || gender == "" || course == ""){
            alert("please fill all thr fields");

        }else {
            alert("Registration successfull");
        }
    }
)
}
let loginForm=document.getElementById("loginForm")
if(loginForm){
    loginForm.addEventListener("submit",function(event)
{
    event.preventDefault();
    console.log(event);
      let email=document.getElementById("loginemail").value;
      let password=document.getElementById("loginpassword").value;
      if (email == "" || password == "") {
        alert("please fill all the fields");
      } else {
        
      }
})
}