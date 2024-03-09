const addProduct = () => {
    const productField = document.getElementById("productName");
    const quantityField = document.getElementById("productQuantity");
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = "";
    quantityField.value = "";

    displayProduct(product, quantity);

    console.log("The product is", product);
    console.log("The product quantity is", quantity);

    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const containerOfProduct = document.getElementById("productContainer");
    const li = document.createElement("li")
    li.innerText = `Your desired product is ${product}`;
    const secondLi = document.createElement("li");
    secondLi.innerText = `You have added ${quantity} of it`;
    containerOfProduct.appendChild(li);
    containerOfProduct.appendChild(secondLi);
}

const getStoredShoppingCart = () => {
    const storedCart = localStorage.getItem("cart");
    let cart = {};

    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    // console.log(cart);
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}

const displayFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    // console.log(savedCart);
    for(const product in savedCart){
        // console.log("The product is", product);
        const quantity = savedCart[product];
        // console.log("The quantity is", quantity);
        displayProduct(product, quantity);
    }
}

displayFromLocalStorage();