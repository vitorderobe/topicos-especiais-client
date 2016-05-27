var delete_button = document.getElementById("deletematch_submit")

delete_button.addEventListener("click", function(){
  event.preventDefault()

  var params = { 
    "id" : document.querySelector("#search_input").value
  }

  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/api/v1/games/" + params["id"];

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 404 )) {
      var myObj = JSON.parse(xmlhttp.responseText);
      alert(xmlhttp.responseText);
    }
  };
  xmlhttp.open("DELETE", url, false);
  xmlhttp.send();

  location.reload();
})