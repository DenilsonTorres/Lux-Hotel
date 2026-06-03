const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const emailAdmin = "admin@luxhotel.com";
  const senhaAdmin = "123456";

  if (email === emailAdmin && senha === senhaAdmin) {
    localStorage.setItem("logado", "true");
    window.location.href = "../index.html";
    console.log("Login realizado");
  } else {
    alert("Usuário ou senha inválidos");
  }
});
