function displaySearch(){
    var x=document.getElementById("searching");
    if(x.style.display==="none"){
        x.style.display="block";
    }
    else {
        x.style.display="none"; // avoid element styles, id; use class toggle
    }
}
function dashboardOnclick(){
    document.getElementById("Dashboard").classList.add('active');
    document.getElementById("Servicing").classList.remove('active');
}
function serviceOnclick(){
    document.getElementById("Servicing").classList.add('active');
    document.getElementById("Dashboard").classList.remove('active'); // redundant 2 functions, use getEleByclassName to get in array and make all false, make this = true
}
function genBoxOnclick(param){
    var name=document.getElementsByClassName("box");
    for(i = 0 ; i<name.length ; i++){
       name[i].classList.remove('activediv');   
    }
    (param).classList.add('activediv');
}
function alertDeplaymentClick(param){
    var content=document.getElementsByClassName("notification-content");
    document.getElementById("notfication-display").style.display="block";
    var ele = (param).getElementsByClassName('notification-content');
    console.log(ele);
    document.getElementById("All-notification").innerHTML=(param).getElementsByClassName('notification-content')[0].innerHTML;
}
var modal = document.getElementById("notfication-display");
window.onclick = function(event) {
    debugger
    if (event.target == modal) {
        document.getElementById("notfication-display").style.display = "none";
    }
    else 
    if(e.target.id === 'backgroundOverlay'){
        modal.style.display = 'none';
        // overlay.style.display = 'none';
    }
}
// window.onload = function(){
// 	var popup = document.getElementById('notfication-display');
//     var overlay = document.getElementById('popup');
//     var openButton = document.getElementById('popup-hide');
//     document.onclick = function(e){
//         if(e.target.id == 'notfication-display'){
//             popup.style.display = 'none';
//             overlay.style.display = 'none';
//         }
//         if(e.target === openButton){
//          	popup.style.display = 'block';
//             overlay.style.display = 'block';
//         }
//     };
// };

// window.onload = function(){
//     var divToHide = document.getElementById('notfication-display');
//     document.onclick = function(e){
//       if(e.target.id !== 'divToHide'){
//         //element clicked wasn't the div; hide the div
//         divToHide.style.display = 'none';
//       }
//     };
//   };


function json2table(json, classes) {
    var cols = Object.keys(json[0]);
    var headerRow = '';
    var bodyRows = '';
    classes = classes || '';
    cols.map(function(col) {
        headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
    });
    json.map(function(row) {
        bodyRows += '<tr>';
        cols.map(function(colName) {
            bodyRows += '<td>' + row[colName] + '<td>';
          });
        bodyRows += '</tr>';
    });
    return '<table class="' +
       classes +
       '"><thead><tr>' +
       headerRow +
       '</tr></thead><tbody>' +
       bodyRows +
       '</tbody></table>';
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var myList = [
    { Name: '<td class="first-col"> Service One',  Type: '<td class="secong-col"> API',     Domain:'<td class="secong-col"> Pecman',   Last_Modified:'<td class="secong-col">10-10-17,11-59-59 PST',   Health:'<span class="dot"></span>', Status:'<td class="secong-col"> Pending Approval' },
    { Name: '<td class="first-col">Service Two',  Type: '<td class="secong-col"> FUNCTION', Domain:'<td class="secong-col"> Could',   Last_Modified:'<td class="secong-col">10-10-17,11-59-59 PST',   Health:'<span class="dot"></span>', Status:'<td class="secong-col"> Pending Approval'},
    { Name: '<td class="first-col">Service Three',Type:  '<td class="secong-col"> FUNCTION', Domain:'<td class="secong-col"> Commerce',   Last_Modified:'<td class="secong-col">10-10-17,11-59-59 PST',   Health:'<span class="dot"></span>', Status:'<td class="secong-col"> STOPPED'},
    { Name: '<td class="first-col">Service Four', Type:  '<td class="secong-col"> FUNCTION', Domain:'<td class="secong-col"> Commerce',   Last_Modified:'<td class="secong-col">10-10-17,11-59-59 PST',   Health:'<span class="dot2"></span>', Status:'<td class="secong-col"> ACTIVE'},
    { Name: '<td class="first-col">Service Five', Type:  '<td class="secong-col"> WEBSITE', Domain:'<td class="secong-col"> Commerce',   Last_Modified:'<td class="secong-col">10-10-17,11-59-59 PST',   Health:'<span class="dot2"></span>', Status:'<td class="secong-col">ACTIVE' },
    { Name: '<td class="first-col">Service Six', Type:  '<td class="secong-col"> WEBSITE', Domain:'<td class="secong-col"> Commerce',   Last_Modified:'<td class="secong-col">10-10-17,11-59-59 PST',   Health:'<span class="dot2"></span>', Status:'<td class="secong-col">ACTIVE' },
    { Name: '<td class="first-col">Service Seven', Type:  '<td class="secong-col"> WEBSITE', Domain:'<td class="secong-col"> Platform',   Last_Modified:'<td class="secong-col">10-10-17,11-59-59 PST',   Health:'<span class="dot2"></span>', Status:'<td class="secong-col">ACTIVE' },
    { Name: '<td class="first-col">Service Eight', Type:  '<td class="secong-col"> WEBSITE', Domain:'<td class="secong-col"> Platform',   Last_Modified:'<td class="secong-col">10-10-17,11-59-59 PST',   Health:'<span class="dot2"></span>', Status:'<td class="secong-col">ACTIVE' },
    { Name: '<td class="first-col">Service Nine', Type:  '<td class="secong-col"> WEBSITE', Domain:'<td class="secong-col"> Platform',   Last_Modified:'<td class="secong-col">10-10-17,11-59-59 PST',   Health:'<span class="dot2"></span>', Status:'<td class="secong-col">ACTIVE' },
    { Name: '<td class="first-col">Service Ten', Type:  '<td class="secong-col"> WEBSITE', Domain:'<td class="secong-col"> Platform',   Last_Modified:'<td class="secong-col">10-10-17,11-59-59 PST',   Health:'<span class="dot2"></span>', Status:'<td class="secong-col">ACTIVE' },
  ];
  function buildHtmlTable(selector) {
    var columns = addAllColumnHeaders(myList, selector);
  
    for (var i = 0; i < myList.length; i++) {
      var row$ = $('<tr style="padding-top:13px;padding-bottom:12px;"/>');
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        var cellValue = myList[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
      }
      $(selector).append(row$);
    }
  }
  function addAllColumnHeaders(myList, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
  
    for (var i = 0; i < myList.length; i++) {
      var rowHash = myList[i];
      for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th class="theader"/>').html(key));
        }
      }
    }
    $(selector).append(headerTr$);
  
    return columnSet;
  }
  


