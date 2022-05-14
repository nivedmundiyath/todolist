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
        var response = JSON.parse(apiRes);
        console.log("API response :", response);

        var column = `<tr>
                        <th>Userid</th>
                        <th>id</th>
                        <th>Title</th>
                        <th>Completed</th>
                      </tr>` ;
        testvar.innerHTML = column;
                       
        for (var value=0; value < response.length; value++)
        {

                var tr = document.createElement("tr");
                var header_data = Object.keys(response[value]);
                // console.log(header_data);
                header_data.forEach((key) => {
                        var td = document.createElement("td");
                        var key_new = key.replace(/["']/g, "");
                        // console.log("input:", key_new);

                        if (key_new == "completed")
                        {
                                var input=document.createElement("input");
                                input.setAttribute("type","checkbox");
                                input.setAttribute("id","checkboxComp");
                                // input.setAttribute("onchange","validateCheckbox();");



                                if(response[value][key]) 
                                {
                                // console.log("input all true:", input);
                                input.setAttribute("checked","true");
                                input.setAttribute("disabled","true");
                                // console.log("TD all true", td);

                                       }
                                input.addEventListener("change", (event)=>{
                                        if(event.currentTarget.checked){
                                                count++;
                                                validateCheckboxtest();
                                        }
                                        else{
                                                count--;
                                        }
                                })
                                       td.appendChild(input);

                        // else{
                        //         // console.log("input all false", input);
                        //         td.appendChild(input);
                        //         // console.log("TD all false", td);

                        // }
                        }
                        else
                                
                                td.innerHTML = response[value][key];

                        
                tr.appendChild(td);

                })
                testvar.appendChild(tr);
        }
                // var row = `<tr>
                //                 <td>${response[value].id}</td>
                //                 <td>${response[value].title}</td>
                //                 <td>${response[value].completed}</td>
                //                 <td> <input type="checkbox" id="checkbox" onclick="validateCheckbox();"> </td>
                //            </tr>` ;

                // testvar.innerHTML+= row;        
                


}
var count =0;
var c_status = false;

var validateCheckboxtest = () => {

        // var checkbox = document.querySelectorAll("#checkboxComp");

        let promise = new Promise(function(resolve,reject){
                if(count == 5) {
                        resolve("Congrats ! 5 task completed");
                }
                else if(count>5)
                {
                        count =0;
                        reject();
                }
        })
        promise.then(function(s){
                alert(s);

        })
        .catch(function() {
                window.location.href="todolist.html";
        })
        

        // if (checkbox.checked == true)
        //         count+=1;
        // else
        //         count-=1;

        // if (count == 5)
        //         {                                       
        //         alert("Congrats ! 5 task completed");
        //         }
        //         console.log("count", count );

        


        



}

// var checkbox = document.querySelectorAll("#checkboxComp");


// checkbox.addEventListener('change', (event) => {
//         if (event.currentTarget.checked) {
//           alert('checked');
//         } else {
//           alert('not checked');
//         }
//       })