
function validate()
{
  var studentid = document.getElementById("studentid");
  var password = document.getElementById("pass");

  if(studentid.value.trim() =="" || password.value.trim() =="")
    {
      alert("No Blank values Allowed...!!");
      return false;
    }
    else{
        true;
    }
}

document.getElementById('signUp-btn').onclick = function() {
  window.location.href = 'registrationform.html';
};
