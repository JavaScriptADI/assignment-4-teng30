const shopInventory = [
    {
        name: "Health Potion",
        price: 20,
    },
    {
        name: "Mana Potion",
        price: 15,
    },
    {
        name: "Iron Sword",
        price: 100,
    },
    {
        name: "Steel Sword",
        price: 150,
    }
];
let gold = Number(prompt("Gold"));
    console.log(`We have ${shopInventory.length} items in our shop`);
if (prompt("Do you want to see the list of these items?").toLowerCase() === "yes") {
    for (let i = 0; i < shopInventory.length; i++) {
        console.log(`${shopInventory[i].name} costs ${shopInventory[i].price} Gold!`);
    }
    // Write here
        if (prompt("would you like to purchase an item").toLowerCase() == "yes" ){
            if (prompt("which item would you like to purchase").toLowerCase() === "mana potion"){
            console.log(`you need ${shopInventory[0].price}`)
        if (gold >= shopInventory[0].price){
            console.log("you can purchase this item")
        }
        else{
            console.log("you dont have enough gold to purchase this item")
        }
    }   else if (prompt().toLowerCase() == "iron sword" ){
        console.log(`you need ${shopInventory[1].price}`)
        if (gold >= shopInventory[1].price){
            console.log("you can purchase this item")
        }
        else{
            console.log("you dont have enough gold to purchase this item")
        }
    }   else if (prompt().toLowerCase() == "steel sword"){
        console.log(`you need ${shopInventory[2].price}`)
        if (gold >= shopInventory[2].price){
            console.log("you can purchase this item")
        }
        else{
            console.log("you dont have enough gold to purchase this item")
        }
    }   else{
        console.log("you put a wrong item")      
    }  
    }    
    // user inputs a item name and you should check if they have enough money and make the purchase
} else {
    console.log("Ok bye");
}

