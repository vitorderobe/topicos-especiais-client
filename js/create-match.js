var post_button = document.getElementById("newmatch_submit")

post_button.addEventListener("click", function(){
  event.preventDefault()

  var params = { 
    "home"         : document.querySelector("#home_input").value,
    "away"         : document.querySelector("#away_input").value,
    "home_score"   : document.querySelector("#home_score_input").value,
    "away_score"   : document.querySelector("#away_score_input").value,
    "championship" : document.querySelector("#champ_input").value,
    "place"        : document.querySelector("#place_input").value,
    "date"         : document.querySelector("#date_input").value,
    "time"         : document.querySelector("#time_input").value,
  }

  document.querySelector("#home_input").value = null;
  document.querySelector("#away_input").value = null;
  document.querySelector("#home_score_input").value = null;
  document.querySelector("#away_score_input").value = null;
  document.querySelector("#champ_input").value = null;
  document.querySelector("#place_input").value = null;
  document.querySelector("#date_input").value = null;
  document.querySelector("#time_input").value = null;

  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/api/v1/games";
  xmlhttp.open("POST", url, false);

  //Send the proper header
  xmlhttp.setRequestHeader("Content-Type", "application/json", "charset=utf-8")

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 201) {
      alert(xmlhttp.responseText);
    }
  };

  string = JSON.stringify(params)
  console.log(string);
  xmlhttp.send(string);

  location.reload();
})