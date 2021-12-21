/*
* This function sends an email to the user from the site, through emailJS.
* calls the function sendMail()
* Once the form is sent an alert letting the user know that the form was submitted witll come up.
*/

(function() {
  emailjs.init("user_0eEFnDwvkPbLTvJE8wgr2");
  })();
function sendMail(){
  let tempParams ={
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
 };
 emailjs.send('service_f60q3jq', 'template_oebyimc', tempParams)
  .then(
    alert("Success, Your email has been sent!!")
  )}
  
