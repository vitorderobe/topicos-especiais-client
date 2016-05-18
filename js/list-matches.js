var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/api/v1/games";

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var myArr = JSON.parse(xmlhttp.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var i;
  for(i = 0; i < arr.length; i++) {
    var newdata = "<tr>"+
      "<td class='text-center'>"+ arr[i].home +"</td>"+
      "<td class='text-center'>"+ arr[i].home_score +"</td>"+
      "<td class='text-center'>"+ arr[i].away_score +"</td>"+
      "<td class='text-center'>"+ arr[i].away +"</td>"+
      "<td class='text-center'>"+ arr[i].championship +"</td>"+
      "<td class='text-center'>"+ arr[i].place +"</td>"+
      "<td class='text-center'>"+ arr[i].date +"</td>"+
      "<td class='text-center'>"+ arr[i].time +"</td>"+
    "</tr>"
    var gtable = document.querySelector("table")
    gtable.innerHTML = gtable.innerHTML + newdata
  }
}