

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
               refCode.innerHTML=(email);
        
          
            
        })
        .catch(function(error) {
          console.log(error.message);
            alert("Login failed,make sure you have an active Account");
        });
    

        
    


    
}



    
        
