/*
* This function sends an email to the user from the site, through emailJS.
* calls the function sendMail()
*/

function sendMail(){
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
  };
  emailjs.send('gmail', 'template_ry67bk5', tempParams)
  .then(function(res) {
    window.alert("Your email has been sent!")
  })
}


