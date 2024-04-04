document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifique se o nome de usuário e a senha correspondem aos valores desejados
    if(username === "nome" && password === "123") {
        // Se correspondem, redirecione para a página do site
        window.location.href= "restrito.html";
    } else {
        
        alert("ta errado parceiro");
    }
});