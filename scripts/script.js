function emailValidate (callback) {

     var emailValue = document.getElementById("exampleInputEmail1").value;
     var passValue = document.getElementById("exampleInputPassword1").value;
     var smallTxt1 = document.getElementById("smallHelp1");
     var smallTxt2 = document.getElementById("smallHelp2");

     smallTxt1.innerHTML = "";
     smallTxt2.innerHTML = "";

        if( emailValue == "" )
                smallTxt1.innerHTML="Fields cannot be null.Please enter a valid Username";
        if (passValue == "" )
                smallTxt2.innerHTML="Fields cannot be null.Please enter a valid password";
        
        if (emailValue == "admin" && passValue == "12345")
            callback(mainPage);



}

var mainPage = function() {

    temp = location.href = "todolist.html";
    return temp;
}


var apiCall = (callback) => {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                        // console.log(this.responseText);

                        callback(this.responseText);


                }

        };

        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();


}


var tdl_Table = (apiRes) => {


        var testvar = document.getElementById("tdlTable");
        var response = JSON.parse(apiRes)
        console.log("API response :", response);

        var column = `<tr>
                        <th>Userid</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Checkbox</th>
                      </tr>` ;
        testvar.innerHTML = column;
                       
        for (var value=0; value < response.length; value++){

                var row = `<tr>
                                <td>${response[value].id}</td>
                                <td>${response[value].title}</td>
                                <td>${response[value].completed}</td>
                                <td> <input type="checkbox" id="checkbox" onclick="validateCheckbox();"> </td>
                           </tr>` ;

                testvar.innerHTML+= row;        
                

        }



}
var count =0;
var validateCheckbox = () => {


        count+=1;

        if (count == 5)
              {                                       
                alert("Congrats ! 5 task completed");
}


        



}