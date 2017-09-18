function showMessage() {
    console.log("TypeScript Tutorial");
}
// Optional Parameter
function addProduct(id, name, price) {
    console.log("ID :" + id);
    console.log("NAMES :" + name);
    if (price != undefined) {
        console.log("PRICE :" + price);
    }
}
addProduct(100, "Iphone");
addProduct(101, "Iphone", 15000);
