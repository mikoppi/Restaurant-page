/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactContent);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeContent);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuContent);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
      });

    const menuButton=document.createElement('button');
    menuButton.classList.add('button-nav','menu');
    menuButton.textContent='Menu';
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setButtonActive(menuButton);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
      });

    const contactButton=document.createElement('button');
    contactButton.classList.add('button-nav','contact');
    contactButton.textContent='Contact';
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setButtonActive(contactButton);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startWebsite);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");



(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7O0FDdkJqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDMUI5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDTztBQUNBO0FBQ007O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBZTtBQUN2QixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQWU7QUFDdkIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFrQjtBQUMxQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBZTs7QUFFbkI7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7O1VDckczQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFDOzs7QUFHckMsb0RBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdDYWxsIDk0ODUyMzA5ODUnO1xuICAgIHJldHVybiBwYXJhZ3JhcGg7XG4gICAgXG59XG5cblxuZnVuY3Rpb24gbG9hZENvbnRhY3RDb250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0Q29udGVudCgpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RDb250ZW50OyIsImZ1bmN0aW9uIGNyZWF0ZUhvbWVDb250ZW50KCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc3JjID0gXCIuL2Rvd25sb2FkLmpwZWdcIjtcbiAgICBpbWFnZS5hbHQgPSBcInBpenphXCI7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEhvbWVQaXp6YSB3ZWJzaXRlLiBXZSBoYXZlIHRoZSBiZXN0IHBpenphcyBpbiB0aGUgd29ybGQhJztcbiAgICByZXR1cm4gcGFyYWdyYXBoO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVDb250ZW50KCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKCkpO1xuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZUNvbnRlbnQ7IiwiZnVuY3Rpb24gY3JlYXRlTWVudUNvbnRlbnQoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbShcbiAgICAgICAgJ0FtZXJpY2FuYScsXG4gICAgICAgICdDaGVlc2UsIGhhbSwgcGluZWFwcGxlLCBBdXJhLWNoZWVzZSdcbiAgICApKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW0oXG4gICAgICAgICdNYXJnaGVyaXRhJyxcbiAgICAgICAgJ0NoZWVzZSdcbiAgICApKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZUl0ZW0oXG4gICAgICAgICdPcGVyYScsXG4gICAgICAgICdDaGVlc2UsIGhhbSwgdHVuYSdcbiAgICApKTtcblxuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0obmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBtZW51SXRlbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG5cbiAgICBjb25zdCBmb29kTmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGZvb2ROYW1lLnRleHRDb250ZW50PW5hbWU7XG5cbiAgICBjb25zdCBmb29kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2ROYW1lKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kRGVzY3JpcHRpb24pO1xuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q29udGVudCgpKTtcbiAgICBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudUNvbnRlbnQ7IiwiaW1wb3J0IGxvYWRIb21lQ29udGVudCBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnVDb250ZW50IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdENvbnRlbnQgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50PSdIb21lUGl6emEnO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICAgIGNvbnN0IG5hdkJhcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2JywnaG9tZScpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQ9J0hvbWUnO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QnV0dG9uQWN0aXZlKGhvbWVCdXR0b24pO1xuICAgICAgICBsb2FkSG9tZUNvbnRlbnQoKTtcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgbWVudUJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnLCdtZW51Jyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudD0nTWVudSc7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRCdXR0b25BY3RpdmUobWVudUJ1dHRvbik7XG4gICAgICAgIGxvYWRNZW51Q29udGVudCgpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdicsJ2NvbnRhY3QnKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50PSdDb250YWN0JztcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEJ1dHRvbkFjdGl2ZShjb250YWN0QnV0dG9uKTtcbiAgICAgICAgbG9hZENvbnRhY3RDb250ZW50KCk7XG4gICAgICB9KTtcbiAgICBcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgICByZXR1cm4gbmF2QmFyO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtYWluXCIpO1xuICAgIHJldHVybiBtYWluO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZm9vdGVyVGV4dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdmb290ZXInLCd0ZXh0Jyk7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudD0nTWFkZSBieSBtaWtvcHBpJ1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICAgIFxuICAgIHJldHVybiBmb290ZXI7XG5cbn1cblxuZnVuY3Rpb24gc2V0QnV0dG9uQWN0aXZlKGdpdmVuQnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9ucz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLW5hdicpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24gIT09IGdpdmVuQnV0dG9uKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgZ2l2ZW5CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbn1cblxuZnVuY3Rpb24gc3RhcnRXZWJzaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIHNldEJ1dHRvbkFjdGl2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1uYXZcIikpO1xuICAgIGxvYWRIb21lQ29udGVudCgpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0V2Vic2l0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzdGFydFdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiO1xuXG5cbnN0YXJ0V2Vic2l0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==