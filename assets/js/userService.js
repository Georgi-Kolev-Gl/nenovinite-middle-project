let manager = (function () {
    let FirstNameInput = document.getElementById('firstName');
    let LastNameInput = document.getElementById('lastName');
    let password = document.getElementById('password');
    let passwordRepeat = document.getElementById('passwordRepeat');
    let emailInput = document.getElementById('email');
    let registerBtn = document.getElementById('register');
    let backToLoginBtn = getById('backToLogin');
    let container = document.getElementById('forTestOnly');
    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');
    let loginBtn = document.getElementById('loginBtn');
    let showRegFormBtn = document.getElementById('showRegisterFormBtn');
    let addNewsEmail = document.getElementById('addNewsEmail');
    let addNewsShownOfNameOfUser = document.getElementById('addNewsName');
    let addNewsTitle = document.getElementById('addNewsTitle');
    let addNewsText = document.getElementById('addNewsContent');
    let addImg = document.getElementById('addImg');
    let logOutAnchor = document.querySelectorAll('.navUl>li a')[8];
    // FUNCTION FOR LOGIN LOGOUT ANCHOR. TO BE MOVED TO UTILS
    function loginLogOutAnchorFunction(ev) {
        if (ev.target.innerText === "Logout") {
            console.log(ev);
            ev.preventDefault();
            manager.logOut();
            location.hash = '#registerFormContainer';
        }
    }
    class User {
        constructor(firstName, lastName, password, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.password = password;
            this.email = email;
            this.myNews = [];
            this.isOnline = false;
        }
    }

    class Questionnaire {
        constructor(title, questions, id) {
            this.title = title;
            this.questions = questions;
            this.id = id;
        }

    }

    class News {
        constructor(title, img, text, date, user, counter, type, id) {
            this.title = title;
            this.img = img;
            this.text = text;
            this.date = date;
            this.user = user;
            this.counter = counter;
            this.type = type;
            this.id = id;
        }
    }

    class UserService {
        constructor() {
            this.allNews = [];
            this.Users = [];
            this.newsId = 0;
            this.questionnaireId = 0;
            this.currentUser = "Guest";
            this.userLoggedIn = false;
            this.allQuestionnaire = [];
        }
        addNewsToAllNews(obj) {
            if (obj instanceof News) {
                this.newsId++;
                this.allNews.push(obj);
            }
        }
        filterNewsByType(type) {
            return this.allNews.filter((el) => el.type === type)
        }
        getNews(arr) {
            arr.forEach(el => {
                let newNews = new News(
                    el.title,
                    el.image || el.img,
                    el.text,
                    el.date || el.data,//change
                    el.user,
                    el.counter,
                    el.type,
                    el.id
                );
                this.addNewsToAllNews(newNews);
            })
        }
        //GET USERS FROM LOCAL STORIGE
        getUsers() {
            if (localStorage.getItem("Users")) {
                this.Users = JSON.parse(localStorage.getItem("Users"))
                if (this.Users.some(user => user.isOnline === true)) {
                    let user = this.Users.filter(userObj => userObj.isOnline === true)[0];
                    console.log(user);
                    this.login(user.email, user.password);
                }
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
                alert('already registered!');
            } else {
                password = password.trim();
                if (password.length > 3 && password[0] === password[0].toUpperCase()) {
                    let user = new User(firstName.trim(), lastName.trim(), password, email.toLowerCase());
                    this.Users.push(user);
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
            console.log(userObj.password, " === ", password);
            if (password === userObj.password) {
                console.log("Inside if ", userObj);
                this.userLoggedIn = true;
                this.currentUser = filteredUser[0];
                this.currentUser.isOnline = true;//is online
                localStorage.setItem('Users', JSON.stringify(this.Users));
                logOutAnchor.innerText = "Logout";
                logOutAnchor.addEventListener('click', loginLogOutAnchorFunction);
                return userObj;
            }
            alert("Wrong Password");
        }
        // LOGOUT
        logOut() {
            this.userLoggedIn = false;
            this.currentUser.isOnline = false;
            this.currentUser = "Guest";
            localStorage.setItem("Users", JSON.stringify(this.Users));
            logOutAnchor.removeEventListener('click', loginLogOutAnchorFunction);
            logOutAnchor.innerText = "Login";
        }
        // DELETE ACCOUNT
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
        // DELETE ALL USERS
        deleteAllUsers() {
            this.Users.length = 0;
            this.userLoggedIn = false;
            localStorage.clear();
            alert('deleted all users');
            this.getUsers();
        }
        addNews(title, img, text, date, type) {
            let newsObj = new News(title, img, text, date, this.currentUser.firstName, 0, type, this.allNews.length + 1)
            this.currentUser.myNews.push(newsObj);
            this.allNews.unshift(newsObj);
            localStorage.setItem('Users', JSON.stringify(this.Users));
            localStorage.setItem('News', JSON.stringify(this.allNews));
        }
        addQuestionnaire(arr) {
            arr.forEach(el => {
                let newQuestionnaire = new Questionnaire(
                    el.title,
                    el.question,
                    el.id
                );
                if (newQuestionnaire instanceof Questionnaire) {
                    this.questionnaireId++;
                    this.allQuestionnaire.push(newQuestionnaire);
                }
            })
        }
        filterByUser(user) {
            return this.allNews.filter((el) => el.user === user)
        }
    }


    registerBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (FirstNameInput.value && LastNameInput.value && password.value && passwordRepeat.value && emailInput.value) {
            if (password.value === passwordRepeat.value) {
                testService.registerNewUser(FirstNameInput.value, LastNameInput.value, password.value, emailInput.value);
                FirstNameInput.value = '';
                LastNameInput.value = '';
                password.value = '';
                emailInput.value = '';
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            } else {
                alert('Паролата не съвпада!');
            }
        } else {
            alert(`Всички полета са задължителни`)
        }
    })
    loginBtn.addEventListener('click', function (ev) {
        ev.preventDefault();
        if (loginEmail.value && loginPassword.value) {
            console.log(loginPassword.value);
            testService.login(loginEmail.value, loginPassword.value);
            loginEmail.value = '';
            loginPassword.value = '';
            location.hash = "#addNews";
            addNewsEmail.value = testService.currentUser.email;
            addNewsShownOfNameOfUser.value = testService.currentUser.firstName;
            console.log(testService.userLoggedIn);
        }
    })
    showRegFormBtn.addEventListener('click', (ev) => {
        ev.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    })
    backToLoginBtn.addEventListener('click', (ev)=>{
        ev.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    })
    let testService = new UserService;
    // testService.getUsers();//
    return testService;
})();

