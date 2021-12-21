/*
* This function sends an email to the user from the site, through emailJS.
* calls the function sendMail()
*/

function sendMail(){
  let tempParams ={
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
 };

 emailjs.send('service_f60q3jq', 'template_oebyimc', tempParams)
  .then(function(res){
    console.log("success", res.status);
  })
}