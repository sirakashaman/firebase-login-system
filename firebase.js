var appFirebase = {};

(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyBgpK_NwxKDFNo8ukIRZUiYej87RLu9h2I",
        authDomain: "under19-62a36.firebaseapp.com",
        databaseURL: "https://under19-62a36.firebaseio.com",
        projectId: "under19-62a36",
        storageBucket: "under19-62a36.appspot.com",
        messagingSenderId: "228028896037",
        appId: "1:228028896037:web:3d638f29210f80fedec0cc",
        measurementId: "G-NMNH67JW9V"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();   
})()