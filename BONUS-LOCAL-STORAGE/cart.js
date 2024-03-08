const addProduct = () => {
    const productField = document.getElementById("productName");
    const quantityField = document.getElementById("productQuantity");
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = "";
    quantityField.value = "";

    const containerOfProduct = document.getElementById("productContainer");
    const li = document.createElement("li")
    li.innerText = `Your desired product is ${product}`;
    const secondLi = document.createElement("li");
    secondLi.innerText = `You have added ${quantity} of it`;
    containerOfProduct.appendChild(li);
    containerOfProduct.appendChild(secondLi);

    console.log("The product is", product);
    console.log("The product quantity is", quantity);
}