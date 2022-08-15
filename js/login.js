// step:01 add click enent handlar in submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('Submit button ckicked')

    // step:2 Get the email address inside the input field
    // awlayes remember Value is get from Input field = 'Value'
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // step:3 Get the password inside the input field.
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password , email);

    // DO NOT VERIFY emailpassword in the clint side
    // step:04 verify email and Password and cheak
    if (email === 'swadeb@gmail.com' && password === 'secrit'){
        // console.log('valid user')
        window.location.href ='bank.html'
    } 
     else{
        alert('invalied user Password, please try again')
    }

         
})

