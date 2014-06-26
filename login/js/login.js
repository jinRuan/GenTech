Parse.initialize("vdDizIGBf3E8JTEQJXPEl85WfyAeuUAo7jcuG8zt", "t7HIytGOPHf81IjiXvx5NWbVuhL4Wx7hT8Oo7ZOj");
//checkForCurrentUser();
window.onload = checkForCurrentUser();
function checkForCurrentUser() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        window.location.assign("../home/index.html");
    }
}

function submit() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var warning = document.getElementById("warn");

    if (username == "") {
        warning.innerHTML = "Please enter a username";
    } else if (password == "") {
        warning.innerHTML = "Please enter a password";
    } else {
        Parse.User.logIn(username, password, {
            success: function (user) {
                window.location.assign("../home/index.html");
            },
            error: function (user, error) {
                alert("Could not log in " + error.message);
            }
        });
    }

}