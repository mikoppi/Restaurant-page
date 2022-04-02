function createHomeContent() {
    const home = document.createElement("div");
    home.classList.add("home");

    return home;
}

function createParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = 'best pizza';
    return paragraph;
}

function loadHomeContent() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomeContent());
    main.appendChild(createParagraph());
    

}

export default loadHomeContent;