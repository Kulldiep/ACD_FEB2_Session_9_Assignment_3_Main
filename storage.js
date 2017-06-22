var usn1 = document.getElementById('usr1');
var pw1 = document.getElementById('pwd1');
var em1 = document.getElementById('mail1');
function store() {
    localStorage.setItem('stn1', usn1.value);
    localStorage.setItem('stpw1', pw1.value);
    localStorage.setItem('stem1', em1.value);
    location.reload();
}
    var storedName1 = localStorage.getItem('stn1');
    var storedPw1 = localStorage.getItem('stpw1');
    var storedEm1 = localStorage.getItem('stem1');
function retrieve() {
         
	document.getElementById("gtusn1").innerHTML= storedName1;
	document.getElementById("gtpw1").innerHTML= storedPw1;
	document.getElementById("gtem1").innerHTML= storedEm1;
}