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


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
