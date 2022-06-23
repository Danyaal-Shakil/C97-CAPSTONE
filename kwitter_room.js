
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAMEqa1pFBVCl_Zsv7UgQICoNC6YDe-Y4I",
  authDomain: "kwitter-but-working.firebaseapp.com",
  databaseURL: "https://kwitter-but-working-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwitter-but-working",
  storageBucket: "kwitter-but-working.appspot.com",
  messagingSenderId: "154117933335",
  appId: "1:154117933335:web:a0133b32b8e988aabd4f52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
