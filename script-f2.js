// Obter o elemento botão
const botao = document.getElementById("botao");

// Adicionar um event handler ao botão
botao.addEventListener("click", function() {
    // Manipular o elemento h1
    const h1 = document.querySelector("h1");
    h1.textContent = "Botão clicado!";
    h1.style.backgroundColor="red";
});

const areatexto = document.getElementById("texto");

areatexto.addEventListener("keypress", function(e) {
    if(e.key == "Enter"){
    console.log(areatexto.value);
    }
});

const lista=document.getElementById("lista");

lista.addEventListener("click", function(e){
    if (e.target.tagName === 'LI') e.target.remove();
})
