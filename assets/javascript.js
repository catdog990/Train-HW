$(document).ready(function(){



  var config = {
    apiKey: "AIzaSyDDu89dxL1orbws7fBelS3-2OGx7OIzzj0",
    authDomain: "train-hw-5d3bf.firebaseapp.com",
    databaseURL: "https://train-hw-5d3bf.firebaseio.com",
    projectId: "train-hw-5d3bf",
    storageBucket: "",
    messagingSenderId: "933065590469"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  $("#butt").on("click", function(event){
  	event.preventDefault();

// *****User Input******//
  	var tName = $("#name-input").val().trim();
  	var des = $("#destination-input").val().trim();
  	var tTime = $("#firstT-input").val().trim();
  	var freque = $("#frequency-input").val().trim();


// ***object to hold the stuff N things*****//
  var wut = {
  	name: tName,
  	destination: des,
  	time: tTime,
  	frequency: freque
  };

  database.ref().push(wut);

  console.log(wut.name);
  console.log(wut.destination);
  console.log(wut.time);
  console.log(wut.frequency);

  $("#name-input").val("");
  $("#destination-input").val("");
  $("#firstT-input").val("");
  $("#frequency-input").val("");


    });

 
});