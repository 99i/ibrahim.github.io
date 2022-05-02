function loginMetod() {
	var username=document.getElementById("useremail").value;
	var password=document.getElementById("userpassword").value;
	if(username=="admin" && password=='a'){
		
		return alert("Log in secc");

	}
	else{
		alert("there is an error");
	}
	
}