//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyA4Feqx2NPldS9DjUasY9SEuaJM0dW4KRQ",
      authDomain: "kwitter-15c41.firebaseapp.com",
      databaseURL: "https://kwitter-15c41-default-rtdb.firebaseio.com",
      projectId: "kwitter-15c41",
      storageBucket: "kwitter-15c41.appspot.com",
      messagingSenderId: "212433597185",
      appId: "1:212433597185:web:a82410adfe0378e3ce2100"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });

}


//End code
      } });  }); }
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
