const inputBtn = document.getElementById("input-btn")

const nameInput = document.getElementById("name-input")
const imgInput = document.getElementById("img-input")
const waNoInput = document.getElementById("wa-no-input")

let productList = []
const productsWrapper = document.getElementById("products-wrapper")

function render(list) {
    list.forEach((product) => {
        productsWrapper.innerHTML += `
            <div class="products">
                <img src="${product[1]}">
                <h1>${product[0]}</h1>
                <button class="wa-btns">${product[2]}</button>
            </div>
        `
        product.length = 3
        
        let waBtns = document.getElementsByClassName("wa-btns")
        
        for (let i = 0; i < waBtns.length; i++) {
            product.push(waBtns[i])
        }

        product.length = 4
    })

    list.forEach((product) => {
        product[3].addEventListener("click", function(){
            console.log(product[2])
        })
    console.log(list)
    })
}

inputBtn.addEventListener("click", () => {
    productList.push([nameInput.value, imgInput.value, waNoInput.value])
    nameInput.value = ""
    imgInput.value = ""
    waNoInput.value = ""
    
    render(productList)
})
