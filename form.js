function formdata() {
	var fname = document.getElementById("firstname").value;
	var lname = document.getElementById("lastname").value;
	var fathername = document.getElementById("fathername").value;
	var mothername = document.getElementById("mothername").value;
	var course = document.getElementById("course").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var dob = document.getElementById("dob").value;
	var gender = document.getElementById("gender").value;
	var address = document.getElementById("address").value;
	var file = document.getElementById("file").value;


	document.write("<h2>Studen Data Form</h2>");
	document.write(" First Name : " + fname + "<br>");
	document.write(" Last Name : " + lname + "<br>");
	document.write(" Father Name : " + fathername + "<br>");
	document.write(" Mother Name : " + mothername + "<br>");
	document.write(" Course Name : " + course + "<br>");
	document.write(" Email : " + email + "<br>");
	document.write(" Mobile : " + phone + "<br>");
	document.write(" Date Of Birth : " + dob + "<br>");
	document.write(" Gender : " + gender + "<br>");
	document.write(" Address : " + address + "<br>");
	document.write(" File : " + file + "<br>");
}