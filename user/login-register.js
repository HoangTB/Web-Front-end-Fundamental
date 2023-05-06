

// Show password
const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

// Show form Đăng kí
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
})

// Mở ra tag Đăng kí
function handelLogin() {
    window.location = "../user/login-register.html";
}


//Create SignUp
const objectUsers = JSON.parse(localStorage.getItem("Acount")) || [];
const formSignUp = document.querySelector("#formSignUp");
formSignUp.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailError = document.querySelector("#error-email");
    const passwordError = document.querySelector("#error-password");
    const repeatPasswordError = document.querySelector("#error-repeat-password");
    const signUpInfo = {
        email: e.target[0].value.trim().toLowerCase(),
        password: e.target[1].value.trim(),
        repeatPassword: e.target[2].value.trim(),
    };

    const checkValidator = validator(signUpInfo);
    if (checkValidator.isError) {
        emailError.innerHTML = checkValidator.errorEmail;
        passwordError.innerHTML = checkValidator.errorPassword;
        repeatPasswordError.innerHTML = checkValidator.errorRepeatPassword;

    } else {
        objectUsers.push(signUpInfo);
        alert("Đăng kí thành công");
        window.location = "../user/login-register.html";

    }
    localStorage.setItem("Acount", JSON.stringify(objectUsers));
    function validator(user) {
        let error = {
            isError: false,
            errorEmail: "",
            errorPassword: "",
            errorRepeatPassword: "",
        };
        const regxEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!user.email.match(regxEmail)) {
            error.isError = true;
            error.errorEmail = "Email không đúng định dạng, vui lòng nhập lại";
        }
        objectUsers.forEach(item => {
            if (item.email == user.email) {
                error.isError = true;
                error.errorEmail = "Email đã được đăng ký";
                return;
            }

            if (user.password < 5) {
                error.isError = true;
                error.errorPassword = "Password phải nhập trên 5 kí tự";
            }
        });


        if (user.repeatPassword !== user.password) {
            error.isError = true;
            error.errorRepeatPassword = "Mật khẩu không trùng với mật khẩu phía trên";
        }
        return error;

    }
});


// Create SignIn
// B1. Lấy element của form
const objectUser = JSON.parse(localStorage.getItem("Acount")) || [];
const formElement = document.querySelector("#formSignIn");

// B2. Lắng nghe sự kiện submit
formElement.addEventListener("submit", (event) => {
    // Chặn action
    event.preventDefault();

    //   B3. Đặt biến user chứa thông tin người dùng nhập
    const user = {
        email: event.target[0].value.trim(), // trim() bỏ dấu space ở 2 bên giá trị
        password: event.target[1].value.trim(),
    };
    console.log(user);
    let isLogin = false;
    // B4. So sánh user với dữ liệu
    objectUser.forEach((item) => {
        if (item.email === user.email && item.password === user.password) {
            isLogin = true;
            alert("Đăng nhập thành công");
            window.location = "../index.html";
            localStorage.setItem("User", JSON.stringify(user));
            renderHeader();
            // function renderHeader() {

            // }
            return;
        }

    });

    if (!isLogin) {
   
        if (user.email === "admin@gmail.com" && user.password === "admin") {
            alert("Tài khoản này sẽ đi đến trang ADMIN !");
            window.location = "/admin/index.html";


            
            localStorage.setItem("Admin", JSON.stringify(user));
        } else alert("Email hoặc mật khẩu không đúng");


    }
});


    // const Admin = JSON.parse(localStorage.getItem("Admin"));
    // const emailElement = document.querySelector(".email");
    // const passwordElement = document.querySelector(".password");
    // Admin.forEach(item => {

    //     if (emailElement.value === item.email && passwordElement.value === item.password) {
    //         window.location = "/admin/index.html";
    //     }

    // });


