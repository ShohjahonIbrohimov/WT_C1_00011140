function validate() {
  // INPUTS
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var subject = document.getElementById("subject").value;

  // ERROR FIELDS
  var err__fname = document.getElementById("err__fname");
  var err__lname = document.getElementById("err__lname");
  var err__subject = document.getElementById("err__subject");

  var status = false;
  console.log(fname);

  if (fname.length < 1) {
    err__fname.innerHTML = "Please enter your name";
    status = false;
  } else {
    err__fname.innerHTML = "";
    status = true;
  }

  if (lname.length < 1) {
    err__lname.innerHTML = "Please enter your lastname";
    status = false;
  } else {
    err__lname.innerHTML = "";
    status = true;
  }

  if (subject.length < 1) {
    err__subject.innerHTML = "Please enter a messsage";
    status = false;
  } else {
    err__subject.innerHTML = "";
    status = true;
  }

  return status;
}
