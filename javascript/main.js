

//----------------dark mode------------------//

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}




//---------------random button---------------//

            
function findQoute() {
  if (question.value == "Superboy Prime") {
    let Qoute = ["Awesome!", "Great choice", ,];
    let random = Math.floor(Math.random() * (Qoute.length - 1));
    document.getElementById("randomQoute").setAttribute("value", Qoute[random]);
  }
  if (question.value != "Superboy Prime") {
    let Qoute = ["Wrong answer", "Why do I even bother with you people?", "THAT GUY?", "REALLY?", "I don't even know who that is", "Didn't I beat him up?", ,];
    let random = Math.floor(Math.random() * (Qoute.length - 1));
    document.getElementById("randomQoute").setAttribute("value", Qoute[random]);
}
}


//----------------sign up form-------------------//

function formValidation() { 
        let name = document.forms["RegForm"]["Name"]; 
        let email = document.forms["RegForm"]["EMail"]; 
        let password = document.forms["RegForm"]["Password"]; 
        let confirmpassword = document.forms["RegForm"]["ConfirmPassword"]; 
        let address = document.forms["RegForm"]["Favorite"]; 
  
        if (name.value == "") { 
            window.alert("Please enter your name."); 
            name.focus(); 
            return false; 
        } 
  
        if (address.value == "") { 
            window.alert("Please enter your favorite Character."); 
            address.focus(); 
            return false; 
        } 
  
        if (email.value == "") { 
            window.alert( 
              "Please enter a valid e-mail address."); 
            email.focus(); 
            return false; 
        } 
  
        if (password.value == "") { 
            window.alert( 
              "Please enter your password."); 
            password.focus(); 
            return false; 
        } 
  
        if (confirmpassword.value == "") { 
            window.alert("Please confirm your password"); 
            confirmpassword.focus(); 
            return false; 
        }
         if (confirmpassword.value != password.value) { 
            window.alert("Your passwords don't match"); 
            confirmpassword.focus(); 
            return false; 
            
            
        } 
  
        let x = 
           document.getElementById("userName").value
        window.alert("Congratulations " + x + " you are now one of us!")
        return true; 
    } 



  //---------------------div sorter-------------------//

  filterSelection("all")
  function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      pfiRemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) pfiAddClass(x[i], "show");
    }
  }
  
  function pfiAddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function pfiRemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  
  // Add active class to the current button (highlight it)

  let btnContainer = document.getElementById("myBtnContainer");
  let btns = btnContainer.getElementsByClassName("btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

