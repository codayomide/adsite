const inputBtn = document.getElementById("input-btn")

const nameInput = document.getElementById("name-input")
const imgInput = document.getElementById("img-input")
const waNoInput = document.getElementById("wa-no-input")

let productList = []

inputBtn.addEventListener("click", function(){
    productList.push([nameInput.value, imgInput.value, waNoInput.value])

    nameInput.value = ""
    imgInput.value = ""
    waNoInput.value = ""

    const productsWrapper = document.getElementById("products-wrapper")
    
    listItems = ""
    for (let i = 0; i < productList.length; i++) {
        listItems += `
            <div class="products">
                <img src="${productList[i][1]}">
                <h1>${productList[i][0]}</h1>
                <button class="wa-btns">${productList[i][2]}</button>
            </div>
        `
    }
    productsWrapper.innerHTML = listItems

    let waBtns = document.getElementsByClassName("wa-btns")
    for (let i = 0; i < productList.length; i++) {
        productList[i].push(waBtns[i])
        console.log(productList)
    }

    productList.forEach(function(product) {
            product[3].addEventListener("click", function(){
                console.log(product[2])
            })
    })
})


