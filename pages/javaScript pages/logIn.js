function registerUser() {
    //We get the player details and save them
    let username = document.querySelector('#user').value
    let pass1 = document.getElementById("pass1").value
    let pass2 = document.getElementById("pass2").value
    if (pass1 != pass2 || pass1.trim()=='') {
        alert("passwords doesn't match")
        return;
    }
    let user = {
        myusername: username,
        mypassword: pass1
    }


    //We get the object of key users
    let arr = JSON.parse(localStorage.getItem('users'))
    if (user.myusername == "" || user.mypassword == "")//while
    {
        alert('You have not entered all the required details')
    }
    else {
            if (arr == undefined) {
                arr = [user]
            }
            else {
                // We check if the user already exists in the system

                arr.push(user)

            }
            //We re-store the array
            localStorage.setItem('users', JSON.stringify(arr))
            localStorage.setItem('currentUser', arr.length - 1)
            window.location.href = 'game.html'
        // }
    }
}

