function createMenuContent() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createItem(
        'Americana',
        'Cheese, ham, pineapple, Aura-cheese'
    ));
    menu.appendChild(createItem(
        'Margherita',
        'Cheese'
    ));
    menu.appendChild(createItem(
        'Opera',
        'Cheese, ham, tuna'
    ));


    return menu;
}

function createItem(name, description) {
    const menuItem=document.createElement('div');
    menuItem.classList.add('item');

    const foodName=document.createElement('h2');
    foodName.textContent=name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    return menuItem;
}

function loadMenuContent() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuContent());
    

}

export default loadMenuContent;