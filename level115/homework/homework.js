const productDiv = document.getElementById("productDiv");
const myForm = document.querySelector("form");
const clearBtn = document.getElementById("clear");

const products = JSON.parse(localStorage.getItem("products")) || [];

console.log(products);

const setLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(products));
}

const addProduct = () => {
    const name = myForm.product.value;
    const quantity = parseInt(myForm.quantity.value);
    const price = parseFloat(myForm.price.value);

    products.push({ name, quantity, price });

    myForm.reset();

    console.log(products);

    setLocalStorage();
    renderProducts();
}

const renderProducts = () => {
    productDiv.innerHTML = "";

    products.forEach((cur, index) => {
        productDiv.innerHTML += `
            <div class="product">
                <p>${cur.name}</p>
                <div class="quantity">
                    <div onclick="changeQuantity(${index}, -1)">-</div>
                    <div id="q-div">${cur.quantity}</div>
                    <div onclick="changeQuantity(${index}, 1)">+</div>
                </div>
                <p><b>${(cur.price * cur.quantity).toFixed(2)}$</b></p>
                <button onclick="deleteProduct(${index})">Delete</button>
            </div>
        `
    })

    if(productDiv.innerHTML === "") {
        productDiv.innerHTML = "<h3>Product list is empty...</h3>";
    }
}

const deleteProduct = (delIndex) => {
    products.splice(delIndex, 1);
    setLocalStorage();
    renderProducts();
}

const deleteAllProducts = () => {
    products.length = 0;

    setLocalStorage();
    renderProducts();
}

const changeQuantity = (productIndex, num) => {
    products[productIndex].quantity += num;

    setLocalStorage();
    renderProducts();
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addProduct();
})

clearBtn.addEventListener("click", deleteAllProducts);

renderProducts();