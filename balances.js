



document.addEventListener("DOMContentLoaded", function() {
        
         var email = document.getElementById("email").value;
         var bal22 = document.getElementById("bal2");

         if(email=="gmasele15@gmail.com"){
               var randomNum = Math.floor(Math.random() * (80 - 50 + 1) + 50);
               var randomNum2 = Math.floor(Math.random() * (10 - 20 + 3) + 30);


               bal22.innerHTML = "USD: " + "<span style='color: #000000; font-weight: bold;'> $9" + randomNum +"."+ randomNum2;
         }
  
}); 
















function updateBalance{


        var email = document.getElementById("email").value;

       if (email=="gmasele15@gmail.com"){
  
               var randomNum = Math.floor(Math.random() * (80 - 50 + 1) + 50);
               var randomNum2 = Math.floor(Math.random() * (10 - 20 + 3) + 30);

               var bal2 = document.getElementById("bal2");

               bal2.innerHTML = "USD: " + "<span style='color: #000000; font-weight: bold; font-size: 17px;'> $9" + randomNum +"."+ randomNum2;
     
      }

}
