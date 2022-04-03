function createHomeContent() {
    const home = document.createElement("div");
    home.classList.add("home");

    const image = document.createElement("img");
    image.src = "./download.jpeg";
    image.alt = "pizza";
    home.appendChild(image);

    return home;
}

function createParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = 'Welcome to HomePizza website. We have the best pizzas in the world!';
    return paragraph;
}

function loadHomeContent() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHomeContent());
    main.appendChild(createParagraph());
    
}

export default loadHomeContent;