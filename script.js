// signup function

function signup(){
    const uName = document.getElementById('signUser').value;
    const uPass = document.getElementById('signPass').value;


    // convert json data to object (convert from JSON to object)
    const users = JSON.parse(localStorage.getItem('users')) || []

    // check if user exists
    if(users.some(user => user.uName === uName)){
        alert('Username already exists. Please choose another one')
        return
    }

    // Signup user
    users.push({uName, uPass});
    localStorage.setItem('users', JSON.stringify(users)) //convert from object to JSON
    alert('Yeepee!! Signup successful, you can log in now')
}



// Login Function
function login(){
    const loginUser = document.getElementById('loginUser').value;
    const loginPass = document.getElementById('loginPass').value;

    // convert json data to object (convert from JSON to object)
    const users = JSON.parse(localStorage.getItem('users')) || []

    // find user
    const user = users.find(user => user.uName === loginUser && user.uPass === loginPass)
    if (user){
        alert('Login Succesful. Welcome to your dashboard ' + loginUser + '!')
    } else {
        alert('Shey you dey whine? Your credentials are not correct joor')
    }
}