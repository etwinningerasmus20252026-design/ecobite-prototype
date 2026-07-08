const users = {
    "123456": { password: "EcoBite2026", role: "student" },
    "P-999": { password: "Admin2026", role: "staff" }
};

function login() {
    let id = document.getElementById("idInput").value;
    let pass = document.getElementById("passwordInput").value;

    if (users[id] && users[id].password === pass) {
        alert("Giriş Başarılı!");
        window.location.href = "dashboard.html";
    } else {
        alert("Hatalı numara veya şifre!");
    }
}
