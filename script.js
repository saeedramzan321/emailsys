//Create objects
      var email_obj  = [
                {
                    "Id": "12",
                    "email": "aaa@example.com",
                    "to": "1562",
                    "subject" :"Notice of official announcement",
                    "date": "2020-01-24"
                },
                {
                    "Id": "13",
                    "email": "bbb@example.com",
                    "to": "zzz@example.com",
                    "subject" :"Webcontact",
                    "date": "2020-02-21"
                    
                },
                {
                    "Id": "14",
                    "email": "ccc@example.com",
                    "to": "yyy@example.com",
                    "subject" :"Web Design",
                    "date": "2020-03-22"
                    
                },
                {
                    "Id": "15",
                    "email": "nnn@example.com",
                    "to": "mmm@example.com",
                    "subject" :"Online Shopping site",
                    "date": "2020-04-02"
                },

                {
                    "Id": "17",
                    "email": "jjj@example.com",
                    "to": "iii@example.com",
                    "subject" :"Mobile Application",
                    "date": "2020-05-03"
                },
                {
                    "Id": "18",
                    "email": "john@example.com",
                    "to": "xyz@example.com",
                    "subject" :"ERP System",
                    "date": "2020-06-07"
                },
                {
                    "Id": "19",
                    "email": "team@example.com",
                    "to": "john@example.com",
                    "subject" :"Ardino System",
                    "date": "2020-08-07"
                },
                 {
                    "Id": "19",
                    "email": "hr@example.com",
                    "to": "ceo@example.com",
                    "subject" :"BI System",
                    "date": "2020-09-07"
                },
                 {
                    "Id": "19",
                    "email": "saeed@example.com",
                    "to": "cyber@example.com",
                    "subject" :"POS System",
                    "date": "2020-10-06"
                },
               

              
            ];

 
function DisplayResult() {

// Hide Email Archiver icon 
document.getElementById('loadingImage').style.visibility='hidden';
  
// get the value of start date  
var x = document.getElementById("Date1").value;

// get the value of end date
var y = document.getElementById("Date2").value;


// set date values to Date object
var startDate = new Date(x);
var endDate = new Date(y);

// Search data between two specific dates
var EmailData= email_obj.filter(function (email) {

var date = new Date(email.date);
return (date >= startDate && date <= endDate);


});

document.getElementById("count").innerHTML = "Results : <b>"+ EmailData.length+"</b> Mail(s)";
//JSON Object End................


//Create table and fetch data from JSON Object.

  var number_of_rows = EmailData.length; // Caculate the length of emails
              
              
              var k = 0;
              var table_body = '<br><table id="myTable" border="1" class="table customers-list" id="example"><thead><tr><th>From</th><th>To</th><th>Subject</th><th>Date<img src="icon/icon_arrow01.svg" alt="" style="width:15px; height:auto;"/></th><th>Action</th></tr></thead><tbody>';
             
              // Print the table
               for(i =0;i< EmailData.length;i++){
                  
                    table_body+='<tr>';
                    table_body +='<td>';
                    table_body +=EmailData[i]["email"];
                    table_body +='</td>';

                    table_body +='<td>';
                    table_body +=EmailData[i]["to"];
                    table_body +='</td>';

                    table_body +='<td>';
                    table_body +=EmailData[i]["subject"];
                    table_body +='</td>';

                    table_body +='<td><img src="icon/icon_clip.svg" alt="" style="width:15px; height:auto;"/>';
                    table_body +=EmailData[i]["date"];
                    table_body +='</td>';

                    table_body +='<td>';
                    table_body +=  "<input  class='btn btn-danger btn-rounded btn-sm my-0' type='button' value='Delete' onclick='deleteRow(this)'>"
                    table_body +='</td>';
                    

                   
                    table_body+='</tr>';
              }
           
                table_body+='</tbody></table></body>';
               $('#tableDiv').html(table_body);
              //display data..........
    

}