function checkUser() {
    //We get the player details and save them
    let username = document.querySelector('#user').value
    let password = document.querySelector('#password').value
    let user = {
        myusername: username,
        mypassword: password
    }
   
    if (user.myusername == "" || user.mypassword == "")
    {
        alert('You have not entered all the required details')
    }
    else {
        let arr = JSON.parse(localStorage.getItem('users'))
        if (arr == undefined) {
           arr=[]
        }
        else {
            let userindex = arr.findIndex(u => u.myusername == user.myusername && u.mypassword == user.mypassword)
            if (userindex > -1) {
                alert('Cheers! You already exist in the system.You are transferred directly to the game.')
                window.location.href = 'game.html'
                localStorage.setItem('currentUser', userindex)
            }
            else {
                alert('You are not yet in our system. Sign up now. ')
                window.location.href = 'logIn.html'
            }
        }
    }



}


