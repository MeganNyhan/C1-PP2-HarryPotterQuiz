function sendMail(params){
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
  };
  emailjs.send('service_va76r2o', 'template_wh1kqsp', tempParams)
  .then(function (res){
    console.log("success", res.status);
  )}
}

