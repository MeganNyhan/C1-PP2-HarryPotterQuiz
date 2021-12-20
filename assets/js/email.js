/*
* This function sends an email to the user from the site, through emailJS.
* calls the function sendMail()
* @param {string: Params} - found in the html file.
*/

function sendMail(params){
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
  };
  emailjs.send('service_va76r2o', 'template_wh1kqsp', tempParams)
  .then((res) => {
    window.confirm("Your email was Sent!");
  }
  )}


