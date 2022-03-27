
var firebaseConfig = {
    apiKey: "AIzaSyCmZxQRqb3HRMUxov85vGf2sN5al2MLrNU",
    authDomain: "kwitter-edd71.firebaseapp.com",
    databaseURL: "https://kwitter-edd71-default-rtdb.firebaseio.com",
    projectId: "kwitter-edd71",
    storageBucket: "kwitter-edd71.appspot.com",
    messagingSenderId: "416074139861",
    appId: "1:416074139861:web:a7a076b7429874c4a1ba5c"
  };
  
firebase.initializeApp(firebaseConfig);

function addUser()

{
user_name = document.getElementById("text").value;
firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
});
}