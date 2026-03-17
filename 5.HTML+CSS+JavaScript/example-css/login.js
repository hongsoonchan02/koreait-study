const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "hong@example.com" && password === "qwer1234") {
        location.href = "user-list.html"; 
    } else {
        alert("이메일 또는 비밀번호가 틀렸습니다.");
    }

});