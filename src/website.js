import loadHomeContent from "./home";
import loadMenuContent from "./menu";
import loadContactContent from "./contact";

function createHeader() {
    const header=document.createElement('div');
    header.classList.add('header');

    const restaurantName=document.createElement('h1');
    restaurantName.classList.add('name');
    restaurantName.textContent='HomePizza';

    header.appendChild(restaurantName);
    header.appendChild(createNavBar());

    return header;
}

function createNavBar() {
    const navBar=document.createElement('nav');

    const homeButton=document.createElement('button');
    homeButton.classList.add('button-nav','home');
    homeButton.textContent='Home';
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setButtonActive(homeButton);
        loadHomeContent();
      });

    const menuButton=document.createElement('button');
    menuButton.classList.add('button-nav','menu');
    menuButton.textContent='Menu';
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setButtonActive(menuButton);
        loadMenuContent();
      });

    const contactButton=document.createElement('button');
    contactButton.classList.add('button-nav','contact');
    contactButton.textContent='Contact';
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setButtonActive(contactButton);
        loadContactContent();
      });
    
    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
    return navBar;

}

function createMain() {
    const main=document.createElement('div');
    main.classList.add('main');
    main.setAttribute("id","main");
    return main;

}

function createFooter() {
    const footer=document.createElement('div');
    footer.classList.add('footer');

    const footerText=document.createElement('p');
    footerText.classList.add('footer','text');
    footerText.textContent='Made by mikoppi'

    footer.appendChild(footerText);
    
    return footer;

}

function setButtonActive(givenButton) {
    const buttons=document.querySelectorAll('.button-nav');
    buttons.forEach((button) => {
        if (button !== givenButton) {
            button.classList.remove("active");
          }
    });
    
    givenButton.classList.add('active');

}

function startWebsite() {
    const content=document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setButtonActive(document.querySelector(".button-nav"));
    loadHomeContent();

}

export default startWebsite;