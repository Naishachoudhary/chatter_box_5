// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCMiMo21vpMiVwsza9_Zr8EjVEomPHJwCw",
      authDomain: "chatterbox-a8681.firebaseapp.com",
      databaseURL: "https://chatterbox-a8681-default-rtdb.firebaseio.com",
      projectId: "chatterbox-a8681",
      storageBucket: "chatterbox-a8681.appspot.com",
      messagingSenderId: "564817432470",
      appId: "1:564817432470:web:06ec29ea513a1c9f41d7b7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "added a room"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "chatter_page.html";

}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name -" + Room_names);
                  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)' ># " + Room_names + " </div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();



function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chatter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


