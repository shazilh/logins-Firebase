var config = {
    apiKey: "AIzaSyCO-DDAcaN_FShfWMN91yNB72--TgVmMKg",
    authDomain: "talent-fest-login.firebaseapp.com",
    databaseURL: "https://talent-fest-login.firebaseio.com",
    projectId: "talent-fest-login",
    storageBucket: "",
    messagingSenderId: "187439051352"
  };
  firebase.initializeApp(config);

var loginWithFB = function(e){
    var provider = new firebase.auth.FacebookAuthProvider();
    login(provider);
}
var loginWithTwitter = function(e){
    var provider = new firebase.auth.TwitterAuthProvider();
    login(provider);
}
var loginWithGoogle = function(e){
    var provider = new firebase.auth.GoogleAuthProvider();
    login(provider);
}
var login = function(provider){
    firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    document.getElementById('username').textContent = ("Hola :") + user.displayName;
    //localStorage.setItem
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  console.log('error',errorMesage)
});
}


var fbButton = document.querySelector('.fb-login');
var twButton = document.querySelector('.twitter-login');
var googleButton = document.querySelector('.google-login');
fbButton.addEventListener('click', loginWithFB);
twButton.addEventListener('click', loginWithTwitter);
googleButton.addEventListener('click', loginWithGoogle);


