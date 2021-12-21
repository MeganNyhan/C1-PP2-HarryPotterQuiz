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

/*
* This will call the function toggle thank you message (), remove the contacrt form and show a thank you form to the user
*/

function toggleThankYouMessage(){
  let html=`
  <p class ="thank-you"> Thank you for sending us feedback!</p>
  <div class ="thank-you-image"> <img src="assets/images/android-chrome-512x512.png"></img>
  </div>
  <div class="return">
    <a href="index.html" class="return-btn"> Return to Game</a>
  </div>`;
  document.getElementById('form-section').innerHTML = html;
}
