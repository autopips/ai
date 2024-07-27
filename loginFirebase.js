

function signUpFirebase(){
    
      var firebaseConfig = {
      apiKey: "AIzaSyAKgvn2crUGUCgOZ5S0RT84iS_6ocNn8z8",
      authDomain: "https://www.google.com",
      projectId: "autopips-f6220",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "154809636444",
      appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
          
          alert("Sign up successful!");
          window.location.href=("https://www.google.com/");
          
        })
        .catch(function(error) {
          console.log(error.message);
        });
    
}

function signInFirebase(){


    
    
    var firebaseConfig = {
      apiKey: "AIzaSyAKgvn2crUGUCgOZ5S0RT84iS_6ocNn8z8",
      authDomain: "https://www.google.com",
      projectId: "autopips-f6220",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "154809636444",
      appId: "YOUR_APP_ID"
    };
    firebase.initializeApp(firebaseConfig);
    
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            
            
            
        
          var LoginLay = document.getElementById("LoginLay");
          var MainLay = document.getElementById("MainLay");
          
          LoginLay.style.display=("none");
          MainLay.style.display=("Block");

            
               var refCode = document.getElementById("refCode");
               var balRef = document.getElementById("balRef");
               var refCount = document.getElementById("refCount");
               var refBal = document.getElementById("refBal");
               var bal2 = document.getElementById("bal2");
            
               refCode.innerHTML=("RefCode: "+email);
               if(email=="gmasele15@gmail.com"){
                   refCode.innerHTML=("Ref19991120");
                   
                   //balRef.innerHTML=("USD 528.29");
                   //bal2.innerHTML=("USD 528.29");
                   refCount.innerHTML=("Referrals: 28");
                   refBal.innerHTML=("Earnings: USD 29.74");

               var randomNum = Math.floor(Math.random() * (80 - 50 + 1) + 50);
               var randomNum2 = Math.floor(Math.random() * (10 - 20 + 3) + 30);

               var bal2 = document.getElementById("bal2");

               bal2.innerHTML = "USD: " + "<span style='color: #000000; font-weight: bold;'> $9" + randomNum +"."+ randomNum2;
     

                   
               }
          setInterval(updateNumber, 1000);
            
        })
        .catch(function(error) {
          console.log(error.message);
            alert("Login failed,make sure you have an active Account");
        });
    

        
    


    
}



    
        
