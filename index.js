function Form() {
    console.log("i am a boy")
    var name=document.getElementsById('Name').value;
    var name=document.getElementsById('lastname').value;
    var name=document.getElementsById('number').value;
    var name=document.getElementsById('email').value;
    if (validation()){
        document.getElementById('myform').submit();
        alert("Name : " + name+ "n lastname: " + lastname +"n Form Id: " + document.getElementById("myform").getAttribute("id")
        + "nn Form Submitted Sucessfully......" );
        return false;
    } 
   
};