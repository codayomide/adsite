const inputBtn = document.getElementById("input-btn");

const nameInput = document.getElementById("name-input");
const imgInput = document.getElementById("img-input");
const waNoInput = document.getElementById("wa-no-input");

let productList = [];
const productsWrapper = document.getElementById("products-wrapper");
let btnList;
let counter = 0;

function listProduct() {
  console.log("product");
}

function render(list) {
  productsWrapper.innerHTML = "";
  list.forEach((product) => {
    productsWrapper.innerHTML += `
            <div class="products">
                <img src="${product[1]}">
                <h1>${product[0]}</h1>
                ${product[3]}
               
            </div>
        `;
  });
}

inputBtn.addEventListener("click", () => {
  productList.push([
    nameInput.value,
    imgInput.value,
    waNoInput.value,
    `<a href='https://wa.me/${waNoInput.value}' target="_blank" id='btn${counter}' class='wa-btns'>${waNoInput.value}</a>`,
  ]);
  console.log(productList);
  nameInput.value = "";
  imgInput.value = "";
  waNoInput.value = "";

  render(productList);
  counter++;
});
