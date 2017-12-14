//var email="megha@gmail.com";
//var password="1234";

var button=document.getElementById("signin");
var ch=document.querySelector(".change");
button.addEventListener("click",function(){
	var email=document.getElementById("check1").value;
var password=document.getElementById("check2").value;
var storedData = JSON.parse(localStorage.getItem("data"));

for(var i=0;i<storedData.length;i++)
{
	var email1=storedData[i].stmail;
	var pass=storedData[i].stpass;
	if(email==email1 && password==pass){
		alert("logged in");
		var name=storedData[i].stname;
		document.getElementById("dis").innerHTML="Hello, "+name;
		document.getElementById("change").innerHTML="Sign Out";
	}
	else{
		alert("invalid user");

	}
}
});