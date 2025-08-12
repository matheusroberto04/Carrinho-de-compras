let totalGeral;
limpar();

// Mapeamento  imagem
const imagensProdutos = {
    "JBL Wave Buds": "./assets/imagens/produtos/jbl.webp",
    "Samsung S25": "./assets/imagens/produtos/s25.webp", 
    "Meta Quest": "./assets/imagens/produtos/metaquest.webp",
    "PS5": "./assets/imagens/produtos/ps5.webp",
    "Xbox Series X Preto": "./assets/imagens/produtos/console.webp",
    "Controle Dualsense Branco": "./assets/imagens/produtos/ControleDualsense.jpg",
    "Controle Xbox Series X Preto": "./assets/imagens/produtos/xboxcontrole.webp"
};

// Criar imagem de pré-visualização abaixo do select
const imgPreview = document.createElement("img");
imgPreview.style.width = "100px";
imgPreview.style.marginTop = "10px";
document.querySelector(".formulario").insertBefore(imgPreview, document.querySelector(".parte-inferior"));

// Atualizar imagem ao trocar produto
document.getElementById("produto").addEventListener("change", () => {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0].trim();
    imgPreview.src = imagensProdutos[nomeProduto] || "";
});

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;


    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }


    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }


    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let preco = quantidade * valorUnitario;


    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;


    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}




function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}