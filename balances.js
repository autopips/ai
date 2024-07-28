

function updateNumber() {
  
        
     var email = document.getElementById("email").value;
      
      
      if (email=="gmasele15@gmail.com"){
  
               var randomNum = Math.floor(Math.random() * (80 - 50 + 1) + 50);
               var randomNum2 = Math.floor(Math.random() * (10 - 20 + 3) + 30);

               var numberElem = document.getElementById("bal2");

               numberElem.innerHTML = "<span style='color: #009FBD; font-weight: bold;'>USD: " + " $628"+"."+ randomNum2;
     
      }
     
   

}

setInterval(updateNumber, 500);










