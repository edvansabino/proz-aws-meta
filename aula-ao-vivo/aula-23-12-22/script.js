let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
const addProduct = document.getElementById("btn-adicionar-produto-01");
const quantProduct = document.getElementById("quantidade-produto-01");
const subtractProduct = document.getElementById("btn-subtrair-produto-01");
console.log(addProduct);
console.log(quantProduct);

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

addProduct.addEventListener("click", adicionarProduto);
subtractProduct.addEventListener("click", retirarProduto);

function adicionarProduto() {
  quantProduct.value = Number(quantProduct.value) + 1;
}

function retirarProduto() {
  quantProduct.value = Number(quantProduct.value) - 1;
}
