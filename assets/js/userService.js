let manager = (function () {
    let FirstNameInput = getById('firstName');
    let LastNameInput = getById('lastName');
    let password = getById('password');
    let passwordRepeat = getById('passwordRepeat');
    let emailInput = getById('email');
    let registerBtn = getById('register');
    let container = getById('forTestOnly');
    let loginEmail = getById('loginEmail');
    let loginPassword = getById('loginPassword');
    let loginBtn = getById('loginBtn');
    let showRegFormBtn = getById('showRegisterFormBtn');
    let addNewsEmail = getById('addNewsEmail');
    let addNewsShownOfNameOfUser = getById('addNewsName');
    let addNewsTitle = getById('addNewsTitle');
    let addNewsText = getById('addNewsContent');
    let addImg = getById('addImg');
    let logOutAnchor = document.querySelectorAll('.navUl>li a')[8];
    // FUNCTION FOR LOGIN LOGOUT ANCHOR. TO BE MOVED TO UTILS
    function loginLogOutAnchorFunction(ev) {
        if (ev.target.innerText === "Logout") {
            ev.preventDefault();
            manager.logOut();
            location.hash = '#registerFormContainer';
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
            this.allNews = [];//taken from old site manager!!!!
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
                    el.image,
                    el.text,
                    el.data,
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
                logOutAnchor.innerText = "Logout";
                logOutAnchor.addEventListener('click', loginLogOutAnchorFunction);
                return userObj;
            }
            alert("Wrong Password");
        }
        // LOGOUT
        logOut() {
            this.userLoggedIn = false;
            this.currentUser = "Guest";
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
            localStorage.setItem('Users', JSON.stringify(this.Users))
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
        sortByViewership(arr) {
            arr.sort((a, b) => b.counter - a.counter);
            return arr;
        }
    }
    class User {
        constructor(firstName, lastName, password, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.password = password;
            this.email = email;
            this.myNews = [];
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
                container.innerHTML = '';
                container.innerHTML = JSON.stringify(testService.Users);
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
    let testService = new UserService;
    testService.getUsers();
    return testService;
})();

