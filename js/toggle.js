

// HAMBURGER TOGGLE
document.querySelector(".nav-toggle").addEventListener("click", function(e){

  e.preventDefault();

  document.querySelector(".topSiteNavigation").classList.toggle("nav-show")
});



// FEATURED PHOTOS
let countryCards = document.getElementsByClassName("countryTopPhotos");

 // Loop through all the cards
for (var i = 0; i < countryCards.length; i++){

  // Add a click listener on each card
countryCards[i].addEventListener('click',function(){

    // Remove the featured class
    for (var q = 0; q < countryCards.length; q++){
        countryCards[q].classList.remove('featured-grid-item');
    }

    // Add the featured class on the one clicked on
    this.classList.add('featured-grid-item');

  });
};



// CONTACT FORM
document.querySelector(".btn").addEventListener("click", function(e){

  e.preventDefault();

  // Messages array
  let messages = new Array;

  // Get inputFname, inputLname, and emailInput and validate
  const inputFname = document.querySelector("#inputFName").value;
  const inputLname = document.querySelector("#inputLName").value;
  const theEmail = document.querySelector("#emailInput").value;
  const theMessage = document.querySelector("#messageArea").value;

  if(inputFname.length <= 3) {
      messages.push("The first name is invalid");

  }

  if(inputLname.length <= 3) {
      messages.push("The last name is invalid");

  }

  if(!ValidateEmail(theEmail)){
    messages.push("Invalid Email");
  }

  if(theMessage.length <= 1) {
    messages.push("Please fill out the message section")
  }

  
  // If no error messages show submit message
  let outputMessage = "";
  if(messages.length == 0){
      outputMessage = '<div class="alert alert-success" role="alert"><p>Thank you for your message!</p></div>';
  }else{
  // Else show error messages
      outputMessage = '<div class="alert alert-danger" role="alert">';
      for(let i=0;i<messages.length;i++){
          outputMessage+='<p>'+messages[i]+"</p>";
      }
      outputMessage+="</div>";
    }

    document.getElementById('errorMessages').innerHTML = outputMessage;
  
  
});


// ValidateEmail function
function ValidateEmail(mail){
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
     return true;
   }else{
     return false;
   }
 }



