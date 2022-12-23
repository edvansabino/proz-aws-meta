const quantidadeSubtotal = document.getElementById("quantidade-subtotal");
const valorSubtotal = document.getElementById("valor-subtotal");
const addProduct = document.getElementById("btn-adicionar-produto-01");
const quantProduct = document.getElementById("quantidade-produto-01");
const subtractProduct = document.getElementById("btn-subtrair-produto-01");

let subtotalInfo = {
  valor: 11.66,
};

addProduct.addEventListener("click", adicionarProduto);
subtractProduct.addEventListener("click", retirarProduto);

function calcTotalValue(quantProduct) {
  valorSubtotal.innerText = (subtotalInfo.valor * quantProduct).toFixed(2);
}

function updateSubTotalText() {
  quantidadeSubtotal.innerText = quantProduct.value + " itens";
  calcTotalValue(quantProduct.value);
}

function adicionarProduto() {
  if (quantProduct.value < 10) {
    quantProduct.value = Number(quantProduct.value) + 1;
  }
  updateSubTotalText();
}

function retirarProduto() {
  if (quantProduct.value > 1) {
    quantProduct.value = Number(quantProduct.value) - 1;
  }
  updateSubTotalText();
}
