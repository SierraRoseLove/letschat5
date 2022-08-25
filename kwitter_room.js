
//ADD YOUR FIREBASE LINKS HERE
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
     
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({            
      });
            
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code

      });});}
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

