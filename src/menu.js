function createMenuContent() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    return menu;

}


function createParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = 'ham pizza';
    return paragraph;
}

function loadMenuContent() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenuContent());
    main.appendChild(createParagraph());

}

export default loadMenuContent;