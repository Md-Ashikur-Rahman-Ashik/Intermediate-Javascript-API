const addProduct = () => {
    const productField = document.getElementById("productName");
    const quantityField = document.getElementById("productQuantity");
    const product = productField.value;
    const quantity = quantityField.value;
    console.log("The product is", product);
    console.log("The product quantity is", quantity);
}