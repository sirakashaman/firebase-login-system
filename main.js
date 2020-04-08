var mainApp = {};

(function() {
    
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.uid;
        }else {
            uid = null;
            window.location.replace("index.html");
        }
      });
     
      document.getElementById('button').addEventListener('click', function () {
        firebase.auth().signOut();
      });
     
})()
