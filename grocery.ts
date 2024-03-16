class Grocery{
    item: string;
    quantity: number;

    constructor(item: string, quantity: number){
        this.item = item;
        this.quantity = quantity;
    }
};

const groceries: Grocery[] = [
    new Grocery("Milk", 1),
    new Grocery("Bread", 4),
    new Grocery("Eggs", 12),
    new Grocery("Apple", 5)
];

//Adding new groceries
document.getElementById('AddItemButton')?.addEventListener('click', () => {
    const itemNameInput = document.getElementById('ItemName') as HTMLInputElement;
    const quantityInput = document.getElementById('ItemQuantity') as HTMLInputElement;

    const itemName = itemNameInput.value.trim();
    const quantity = parseInt(quantityInput.value.trim());

    if (itemName && quantity) {
        groceries.push(new Grocery(itemName, quantity));

        const listItem = document.getElementById('Items');
        const li = document.createElement('li');
        li.innerHTML = `Item: ${itemName}, Quantity: ${quantity}`;
        listItem?.appendChild(li);

        // Clear input fields
        itemNameInput.value = '';
        quantityInput.value = '';
    } else {
        alert('Please enter item name and quantity.');
    }
});

groceries.forEach(grocery =>{
    let listItem = document.getElementById('Items');
    const li = document.createElement('li');
    li.innerHTML = `Item: ${grocery.item}, Quantity: ${grocery.quantity}`
    listItem?.appendChild(li);
});

