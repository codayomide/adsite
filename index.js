let id = (id) => document.getElementById(id);

let display = (list, wrapper) => {
    wrapper.innerHTML = ""
    list.forEach((product) => {
        wrapper.innerHTML += `
        <div class="products">
            <img src="${product[1]}">
            <h1>${product[0]}</h1>
            ${product[3]}
        </div>
    `
    })
}

const productsWrapper = id("products-wrapper")

let productArray = JSON.parse( localStorage.getItem("productList") )

display(productArray, productsWrapper)