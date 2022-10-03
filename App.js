function errorMessage() {
 
   let message = document.getElementById("email");
   let text ;

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(message.value)) {
      text = "";
      message.className = "";
   } else if (message.value == "") {
      text = "Cannot be blank";
      message.className = "color";
   } else {
      text = "Please provide a valid email";
      message.className = "color";
   }
   document.getElementById("errorTxt").innerHTML = text;
}
