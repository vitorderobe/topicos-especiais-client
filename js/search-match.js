var search_button = document.getElementById("searchmatch_submit")

search_button.addEventListener("click", function(){
  event.preventDefault()

  var params = { 
    "id" : document.querySelector("#search_input").value
  }

  var xmlhttp = new XMLHttpRequest();
  var url = "http://localhost:3000/api/v1/games/" + params["id"];

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 404 )) {
      var myObj = JSON.parse(xmlhttp.responseText);
      showSearch(myObj);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  function showSearch(obj) {
    if(obj.error == "ID not found"){
      var newdata = "<br><h4>ID not found</h4>"
    } else {
      var newdata = "<table class='table table-striped'>"+
        "<thead>"+
          "<tr>"+
            "<th class='col-sm-4 text-center' colspan='4'>Jogos</th>"+
            "<th class='col-sm-2 text-center'>Campeonato</th>"+
            "<th class='col-sm-2 text-center'>Local</th>"+
            "<th class='col-sm-2 text-center'>Data</th>"+
            "<th class='col-sm-2 text-center'>Horário</th>"+              
          "</tr>"+
        "</thead>"+
        "<tbody>"+
          "<tr>"+
            "<td class='text-center'>"+ obj.home +"</td>"+
            "<td class='text-center'>"+ obj.home_score +"</td>"+
            "<td class='text-center'>"+ obj.away_score +"</td>"+
            "<td class='text-center'>"+ obj.away +"</td>"+
            "<td class='text-center'>"+ obj.championship +"</td>"+
            "<td class='text-center'>"+ obj.place +"</td>"+
            "<td class='text-center'>"+ obj.date +"</td>"+
            "<td class='text-center'>"+ obj.time +"</td>"+
          "</tr>"+
        "</tbody>"+
      "</table>"
    }
    var gtable = document.querySelector("table");
    gtable.innerHTML = newdata;
  }
})