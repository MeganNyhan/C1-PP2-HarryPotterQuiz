/*
* This function sends an email to the user from the site, through emailJS.
* calls the function sendMail()
*/

document.addEventListener('DOMContentLoaded', function(){
  document.getElementsByClassName('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    emailjs.init("user_0eEFnDwvkPbLTvJE8wgr2");
    emailjs.sendForm('harry-potter-quiz', template_ry67bk5, this)
    .then (function (){
      // successful email
    }, function(error){
      console.log('Failed', error);
    });
    toggleThankYouMessage();
  });
});
