function createContactContent() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    return contact;

}

function createParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = 'Call 9485230985';
    return paragraph;
    
}


function loadContactContent() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContactContent());
    main.appendChild(createParagraph());
}

export default loadContactContent;