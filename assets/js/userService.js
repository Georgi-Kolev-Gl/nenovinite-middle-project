let testService = (function () {
    let FirstNameInput = document.getElementById('firstName');
    let LastNameInput = document.getElementById('lastName');
    let password = document.getElementById('password');
    let emailInput = document.getElementById('email');
    let btn = document.getElementById('register');
    let container = document.getElementById('forTestOnly');

    class UserService {
        constructor() {
            this.Users = [];
            this.userLoggedIn = false;
        }
        //GET USERS FROM LOCAL STORIGE
        getUsers() {
            if (localStorage.getItem("Users")) {
                this.Users = JSON.parse(localStorage.getItem("Users"))
            } else {
                localStorage.setItem("Users", JSON.stringify(this.Users));
            }

        }
        // REGISTER
        registerNewUser(firstName, lastName, password, email) {
            console.log('btn clicked');
            let isEmail = email.trim().includes('@');
            if (!isEmail) {
                console.log('Not a valid email adress');
                alert('Not a valid email adress');
                return
            }
            let emails = this.Users.map(e => e.email.toLowerCase())
            //console.log(emails);
            if (emails.includes(email.trim().toLowerCase())) {
                console.log("Already registered!");
                alert('already registered!');
            } else {
                password = password.trim();
                if (password.length > 3 && password[0] === password[0].toUpperCase()) {
                    let user = new User(firstName.trim(), lastName.trim(), password, email.toLowerCase());
                    this.Users.push(user);
                    this.userLoggedIn = true;
                    localStorage.setItem("Users", JSON.stringify(this.Users));
                }
            }
        }
        // LOGIN
        login(email, password) {
            email = email.trim().toLowerCase();
            let filteredUser = this.Users.filter(e => e.email === email);
            if (filteredUser.length < 1) {
                console.log("User not found!");
                alert("User not found! Check your email and try again!");
                return
            }
            let userObj = filteredUser[0];
            if (userObj.password === password) {
                this.userLoggedIn = true;
                return userObj;
            }
            alert("Wrong Password");
        }
        // DELETE USER
        deleteUser(email, password) {
            email = email.trim().toLowerCase();
            let filteredUser = this.Users.filter(e => e.email === email);
            if (filteredUser.length < 1) {
                console.log("User not found! Try again");
                alert("wrong email or password");
                return
            }
            this.Users.some((e, i) => {
                if (e.email === email) {
                    alert(`user ${this.Users[i].firstName} with ${this.Users[i].email} deleted`);
                    this.Users.splice(i, 1);
                }
            })
            localStorage.setItem("Users", JSON.stringify(this.Users));
        }
        deleteAllUsers() {
            this.Users.length = 0;
            this.userLoggedIn = false;
            localStorage.clear();
            alert('deleted all users');
            this.getUsers();
        }
        // LOGOUT
        logOut() {
        }
    }
    let testService = new UserService;

    class User {
        constructor(firstName, lastName, password, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.password = password;
            this.email = email;
            this.myNews = [];
        }
        // USER ADD NEWS
        addNews() {
        }
    }

    btn.addEventListener('click', function (ev) {
        ev.preventDefault()
        testService.registerNewUser(FirstNameInput.value, LastNameInput.value, password.value, emailInput.value);
        FirstNameInput.value = '';
        LastNameInput.value = '';
        password.value = '';
        emailInput.value = '';
        container.innerHTML = '';
        container.innerHTML = JSON.stringify(testService.Users);
    })
    testService.getUsers();
    return testService;
})();

