var _a;
var Grocery = /** @class */ (function () {
    function Grocery(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }
    return Grocery;
}());
;
var groceries = [
    new Grocery("Milk", 1),
    new Grocery("Bread", 4),
    new Grocery("Eggs", 12),
    new Grocery("Apple", 5)
];
//Adding new groceries
(_a = document.getElementById('AddItemButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var itemNameInput = document.getElementById('ItemName');
    var quantityInput = document.getElementById('ItemQuantity');
    var itemName = itemNameInput.value.trim();
    var quantity = parseInt(quantityInput.value.trim());
    if (itemName && quantity) {
        groceries.push(new Grocery(itemName, quantity));
        var listItem = document.getElementById('Items');
        var li = document.createElement('li');
        li.innerHTML = "Item: ".concat(itemName, ", Quantity: ").concat(quantity);
        listItem === null || listItem === void 0 ? void 0 : listItem.appendChild(li);
        // Clear input fields
        itemNameInput.value = '';
        quantityInput.value = '';
    }
    else {
        alert('Please enter item name and quantity.');
    }
});
groceries.forEach(function (grocery) {
    var listItem = document.getElementById('Items');
    var li = document.createElement('li');
    li.innerHTML = "Item: ".concat(grocery.item, ", Quantity: ").concat(grocery.quantity);
    listItem === null || listItem === void 0 ? void 0 : listItem.appendChild(li);
});
