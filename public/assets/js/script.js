

let button = document.getElementById("button");

button.addEventListener("click", function(){
     // get values which the user types
     let name = document.getElementById("name").value;
     let email = document.getElementById("email").value;
     let write = document.getElementById("write").value;

     if(name=="" || email == "" || write == ""){
         alert("Please enter the fields");
     }else{
         // make the object

         var data = {
             name : name,
             email : email,
             write : write
         }

         // save data to fb
         var database = firebase.database(); // which gets the database 
         var ref = database.ref("email");

         // pushing the object  to the reference records
         ref.push(data);
     }
})