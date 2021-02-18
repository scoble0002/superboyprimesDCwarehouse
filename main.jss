
//---------------random button---------------//

            
function findMovie() {
    let Movie = ["Citizen Kane", "The Apartment" ,"Fargo", "All ABout Eve", "Casablanca", "Double Indemity" , "A Face in the Crowd", "A Face in the Crowd"  ,"Do the Right Thing"
                ,"The Treasure of the Sierra Madre","Boogie Nights","Rear Window","Pulp Fiction","Fast TImes at Ridgemont High","Boyz n the Hood","Midnight Cowboy",
                "Sunset Bouleletd","Vertigo","Some Like it Hot","The Maltese Falcon","On the Waterfront","Touch of Evil",  ,"Cool Hand Luke","To Kill a Mockingbird",
                "Who Framed Roger Rabbit","Duck Soup","Groundhog Day","The Asphalt Jungle","Wizard of Oz","This Spinal Tap","The Man Who Shot Liberty Valance","A Night at the Opera",
                "Who's Afraid of Virginia Woolf","Dr Strangelove","Blazing Saddles","Night of the Hunter","The Thing","Unforgiven","The Big Lebowski","Raiders of the Lost Ark",
                "Blade Runner","The Best Years of Our Lives","The Htch-Hiker","It Happened One Night","Sullivan's Travels","Singing in the Railroad","Psycho","Rocky","Young Frankenstein",
                "Jaws","High Noon","Halloween","Ghostbusters","Shadow of the Doubt","Raising Arizonia","Big","Bonnie and Clyde","A Clockwork Orange","Stagecoach","The Royal Tennenbaums",
                "Nation Lampoon's Vacation","The Wild Bunch","12 Angry Men","Alien","Coming to America" ,"Willy Wonka and The Chocalate Factory","Die Hard","No Country for Old Men",
                "Dazed and Confused","The Searchers","Back to the Future","Planes Trains and Automobiles","LA Confidential","The Grapes of Wraith","Bringing up Baby","Scream","A Christmas Story",
                "To Have or Have Not","The Shining","Ed Wood","Mr Smith Goes to Washington","Hail the Conquering Hero","First Blood","Dog Day Afternoon","The Terminator","E.T. The Extraterrestrial",
                "Shaun of the Dead","The Lady Eve","North by Northwest","Apocalypse Now","Clueless","Taxi Driver","Platoon","What Ever Happened to Baby Jane","Get Out","Fight CLub",
                "Gentlemen Prefer Blondes","Grease","Scott Pilgrim versus the World"
];

    let random = Math.floor(Math.random() * (Movie.length - 1));

    document.getElementById("randomMovie").setAttribute("value", Movie[random]);
}




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
           document.getElementById("platypusName").value
        window.alert("Congratulations " + x + " you are now one of us!")
        return true; 
    } 



  //---------------------pfi list sorter-------------------//

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

