let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

const nameInput = id("name-input"),
    imgInput = id("img-input"),
    waNoInput = id("wa-no-input"),
    deleteBtn = id("delete-btn"),
    inputBtn = id("input-btn"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");


let productList = []
let counter = 0
const productsFromLocalStorage = JSON.parse( localStorage.getItem("productList") )

// let engine = (id, serial, message) => {
//     if (id.value.trim() === "") {
//       errorMsg[serial].innerHTML = message;
//       id.style.border = "2px solid red";
      
//       failureIcon[serial].style.opacity = "1";
//       successIcon[serial].style.opacity = "0";
//     } else {
//       errorMsg[serial].innerHTML = "";
//       id.style.border = "2px solid green";
  
//       failureIcon[serial].style.opacity = "0";
//       successIcon[serial].style.opacity = "1";
//       // render(productList, productsWrapper)
//     }
// };

let invalid = (input, serial, message) => {
    errorMsg[serial].innerHTML = message;
    input.style.border = "2px solid red";
    
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
}

let valid = (input, serial) =>  {
  errorMsg[serial].innerHTML = "";
  input.style.border = "2px solid green";

  failureIcon[serial].style.opacity = "0";
  successIcon[serial].style.opacity = "1";
}

// let render = (list, wrapper) => {
// wrapper.innerHTML = ""
// list.forEach((product) => {
//     if (product[0].trim() === "" || product[1].trim() === "" || product[2].trim() === "") {
//     list.pop(product)

//     } else {
    
//     }
// })
// }

if (productsFromLocalStorage) {
    productList = productsFromLocalStorage
    // render(productList, productsWrapper)
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear()
  productList = []
  // render(productList, productsWrapper)
})

inputBtn.addEventListener("click", () => {
  if (nameInput.value.trim() === "" || imgInput.value.trim() === "" || waNoInput.value.trim() === "") {
    if(nameInput.value.trim() === "") {
     invalid(nameInput, 0, "Product Name cannot be blank");
    } else {
      valid(nameInput, 0)
    }
    
    if(imgInput.value.trim() === "") {
      invalid(imgInput, 1, "Image Url cannot be blank");
    } else {
      valid(imgInput, 1)
    }
    
    if(waNoInput.value.trim() === "") {
      invalid(waNoInput, 2, "Whatsapp number cannot be blank");
    } else {
      valid(waNoInput, 2)
    }
  } else { 
    productList.push([
      nameInput.value,
      imgInput.value,
      waNoInput.value,
      `<a href='https://wa.me/${waNoInput.value}' target="_blank" id='btn${counter}' class='wa-btns'>${waNoInput.value}</a>`,
    ])
    localStorage.setItem("productList", JSON.stringify(productList) )
    // render(productList, productsWrapper)
    counter++
  }
})