/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateContact(){
    const content= document.querySelector("#content");

    const section= document.createElement("div");
    section.classList.add("content-box");
    section.setAttribute("id","contactSection");

    const h3=document.createElement('h3');
    h3.textContent="Contact";
    section.appendChild(h3);

    const items=document.createElement("div");
    items.classList.add("contact-items");

    const contactItem=(name,link,text)=>{
        const div= document.createElement("div");
        div.textContent=`${name}: `;
        
        const anchor= document.createElement('a');
        anchor.classList.add("contact-link");
        anchor.href= link;
        anchor.textContent= text;
        div.appendChild(anchor);

        items.appendChild(div);
    }
    
    section.appendChild(items);

    contactItem('Email', 'mailto:pradeepxwon@gmail.com', 'pradeepxwon@gmail.com')
    contactItem('LinkedIn', 'https://www.linkedin.com/in/pradeeprajnepal/', 'linkedin.com/pradeeprajnepal')
    contactItem('Github', 'https://github.com/pradeeprajnepal', 'pradeeprajnepal')

    content.appendChild(section);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContact);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function generateHome(){
    const content= document.querySelector("#content");

    const section= document.createElement("div");
    section.classList.add("home");
    section.setAttribute("id","homeSection");

    const heading= document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent= "Cafe Terrace";
    section.appendChild(heading);

    const subHeading= document.createElement("h3");
    subHeading.classList.add("sub-heading");
    subHeading.textContent= "Est 1888";
    section.appendChild(subHeading);
    
    const img= document.createElement("img");
    img.src="../src/cafe.jpg";
    section.appendChild(img);

    content.appendChild(section);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHome);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function generateMenu(){
    const content= document.querySelector("#content");

    const section= document.createElement("div");
    section.classList.add("content-box");
    section.setAttribute("id","menuSection");
    
    const list= document.createElement("div");
    list.classList.add("menu-list");
    list.setAttribute("id","menu-list");
    section.appendChild(list);

    const menuCategory= (name)=>{
        const category= document.createElement("div");
        category.classList.add("menu-category");
        category.setAttribute("id",name);
        list.appendChild(category);

        function capitalizeFirst(string){
            return string.charAt(0).toUpperCase()+string.slice(1);
        }

        const menuHead= document.createElement("h4");
        menuHead.classList.add("special");
        menuHead.textContent= capitalizeFirst(name);
        category.appendChild(menuHead);
        
        return category;
    }

    const special= menuCategory("Special");
    const regular= menuCategory("Regular");

    const menuItems= (name,price,category)=>{
        const item= document.createElement("div");
        item.classList.add("menu-item");

        const itemName= document.createElement("span");
        itemName.textContent= name;
        item.appendChild(itemName);

        const itemPrice= document.createElement("span");
        itemPrice.textContent= price;
        item.appendChild(itemPrice);
        
        category.appendChild(item);

        return item;

    }


    menuItems("Chicken Nuggets","Rs 200",special);
    menuItems("Chicken Dumpling","Rs 100",special);
    menuItems("Sizzler","Rs 400",special);
    menuItems("Fries","Rs 100",special);

    menuItems("Burger","Rs 200",regular);
    menuItems("Pizza","Rs 400",regular);
    menuItems("Tacos","Rs 400",regular);
    menuItems("Drinks","Rs 100",regular);

    content.appendChild(section);


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");




function generateNav(){
    const content= document.querySelector("#content");

    const nav= document.createElement("div");
    nav.classList.add("nav");


    const navBtns= (name)=>{
        const btn= document.createElement('button');
        btn.classList.add("nav-btn");
        btn.setAttribute("id",name);

        function capitalFirst(string){
            return string.charAt(0).toUpperCase()+string.slice(1);
        }

        btn.textContent=capitalFirst(name);
        nav.appendChild(btn);

    }
    navBtns("home");
    navBtns("menu");
    navBtns("contact");

    content.appendChild(nav);

    function clearContent(){
        content.innerHTML="";
    }
    
    const homeBtn= document.querySelector("#home");
    const menuBtn= document.querySelector('#menu')
    const contactBtn= document.querySelector("#contact")
    
    homeBtn.addEventListener('click', () => {
        clearContent();
        generateNav();
        (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })
    
    menuBtn.addEventListener('click', () => {
        clearContent();
        generateNav();
        (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })
    
    contactBtn.addEventListener('click', () => {
        clearContent();
        generateNav();
        (0,_contact__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateNav);

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
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nav */ "./src/modules/nav.js");



(0,_modules_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_home__WEBPACK_IMPORTED_MODULE_0__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDckM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUMxQjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVhO0FBQ047QUFDQTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7OztVQzFEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRjtBQUN4QztBQUNBLHdEQUFXO0FBQ1gseURBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0KCl7XHJcbiAgICBjb25zdCBjb250ZW50PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtYm94XCIpO1xyXG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29udGFjdFNlY3Rpb25cIik7XHJcblxyXG4gICAgY29uc3QgaDM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGgzLnRleHRDb250ZW50PVwiQ29udGFjdFwiO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG4gICAgY29uc3QgaXRlbXM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWl0ZW1zXCIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RJdGVtPShuYW1lLGxpbmssdGV4dCk9PntcclxuICAgICAgICBjb25zdCBkaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LnRleHRDb250ZW50PWAke25hbWV9OiBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFuY2hvcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1saW5rXCIpO1xyXG4gICAgICAgIGFuY2hvci5ocmVmPSBsaW5rO1xyXG4gICAgICAgIGFuY2hvci50ZXh0Q29udGVudD0gdGV4dDtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcclxuXHJcbiAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtcyk7XHJcblxyXG4gICAgY29udGFjdEl0ZW0oJ0VtYWlsJywgJ21haWx0bzpwcmFkZWVweHdvbkBnbWFpbC5jb20nLCAncHJhZGVlcHh3b25AZ21haWwuY29tJylcclxuICAgIGNvbnRhY3RJdGVtKCdMaW5rZWRJbicsICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcHJhZGVlcHJham5lcGFsLycsICdsaW5rZWRpbi5jb20vcHJhZGVlcHJham5lcGFsJylcclxuICAgIGNvbnRhY3RJdGVtKCdHaXRodWInLCAnaHR0cHM6Ly9naXRodWIuY29tL3ByYWRlZXByYWpuZXBhbCcsICdwcmFkZWVwcmFqbmVwYWwnKVxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUNvbnRhY3Q7IiwiXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUhvbWUoKXtcclxuICAgIGNvbnN0IGNvbnRlbnQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBzZWN0aW9uPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcclxuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIixcImhvbWVTZWN0aW9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmc9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50PSBcIkNhZmUgVGVycmFjZVwiO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuXHJcbiAgICBjb25zdCBzdWJIZWFkaW5nPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBzdWJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJzdWItaGVhZGluZ1wiKTtcclxuICAgIHN1YkhlYWRpbmcudGV4dENvbnRlbnQ9IFwiRXN0IDE4ODhcIjtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ViSGVhZGluZyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGltZz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zcmM9XCIuLi9zcmMvY2FmZS5qcGdcIjtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUhvbWU7IiwiXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZU1lbnUoKXtcclxuICAgIGNvbnN0IGNvbnRlbnQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBzZWN0aW9uPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1ib3hcIik7XHJcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsXCJtZW51U2VjdGlvblwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgbGlzdD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlzdFwiKTtcclxuICAgIGxpc3Quc2V0QXR0cmlidXRlKFwiaWRcIixcIm1lbnUtbGlzdFwiKTtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG4gICAgY29uc3QgbWVudUNhdGVnb3J5PSAobmFtZSk9PntcclxuICAgICAgICBjb25zdCBjYXRlZ29yeT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXRlZ29yeVwiKTtcclxuICAgICAgICBjYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5hbWUpO1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3Qoc3RyaW5nKXtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStzdHJpbmcuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZW51SGVhZD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgICAgIG1lbnVIZWFkLmNsYXNzTGlzdC5hZGQoXCJzcGVjaWFsXCIpO1xyXG4gICAgICAgIG1lbnVIZWFkLnRleHRDb250ZW50PSBjYXBpdGFsaXplRmlyc3QobmFtZSk7XHJcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQobWVudUhlYWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjYXRlZ29yeTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzcGVjaWFsPSBtZW51Q2F0ZWdvcnkoXCJTcGVjaWFsXCIpO1xyXG4gICAgY29uc3QgcmVndWxhcj0gbWVudUNhdGVnb3J5KFwiUmVndWxhclwiKTtcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbXM9IChuYW1lLHByaWNlLGNhdGVnb3J5KT0+e1xyXG4gICAgICAgIGNvbnN0IGl0ZW09IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtTmFtZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQ9IG5hbWU7XHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50PSBwcmljZTtcclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbWVudUl0ZW1zKFwiQ2hpY2tlbiBOdWdnZXRzXCIsXCJScyAyMDBcIixzcGVjaWFsKTtcclxuICAgIG1lbnVJdGVtcyhcIkNoaWNrZW4gRHVtcGxpbmdcIixcIlJzIDEwMFwiLHNwZWNpYWwpO1xyXG4gICAgbWVudUl0ZW1zKFwiU2l6emxlclwiLFwiUnMgNDAwXCIsc3BlY2lhbCk7XHJcbiAgICBtZW51SXRlbXMoXCJGcmllc1wiLFwiUnMgMTAwXCIsc3BlY2lhbCk7XHJcblxyXG4gICAgbWVudUl0ZW1zKFwiQnVyZ2VyXCIsXCJScyAyMDBcIixyZWd1bGFyKTtcclxuICAgIG1lbnVJdGVtcyhcIlBpenphXCIsXCJScyA0MDBcIixyZWd1bGFyKTtcclxuICAgIG1lbnVJdGVtcyhcIlRhY29zXCIsXCJScyA0MDBcIixyZWd1bGFyKTtcclxuICAgIG1lbnVJdGVtcyhcIkRyaW5rc1wiLFwiUnMgMTAwXCIscmVndWxhcik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZU1lbnU7IiwiaW1wb3J0IGdlbmVyYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCBnZW5lcmF0ZUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTmF2KCl7XHJcbiAgICBjb25zdCBjb250ZW50PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgbmF2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XHJcblxyXG5cclxuICAgIGNvbnN0IG5hdkJ0bnM9IChuYW1lKT0+e1xyXG4gICAgICAgIGNvbnN0IGJ0bj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xyXG4gICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLG5hbWUpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjYXBpdGFsRmlyc3Qoc3RyaW5nKXtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStzdHJpbmcuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4udGV4dENvbnRlbnQ9Y2FwaXRhbEZpcnN0KG5hbWUpO1xyXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgIH1cclxuICAgIG5hdkJ0bnMoXCJob21lXCIpO1xyXG4gICAgbmF2QnRucyhcIm1lbnVcIik7XHJcbiAgICBuYXZCdG5zKFwiY29udGFjdFwiKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJDb250ZW50KCl7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUw9XCJcIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaG9tZUJ0bj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xyXG4gICAgY29uc3QgbWVudUJ0bj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKVxyXG4gICAgY29uc3QgY29udGFjdEJ0bj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0XCIpXHJcbiAgICBcclxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICAgICAgZ2VuZXJhdGVOYXYoKTtcclxuICAgICAgICBnZW5lcmF0ZUhvbWUoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICAgICAgZ2VuZXJhdGVOYXYoKTtcclxuICAgICAgICBnZW5lcmF0ZU1lbnUoKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICAgICAgZ2VuZXJhdGVOYXYoKTtcclxuICAgICAgICBnZW5lcmF0ZUNvbnRhY3QoKTtcclxuICAgIH0pXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVOYXY7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2VuZXJhdGVIb21lIGZyb20gXCIuL21vZHVsZXMvaG9tZVwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVOYXYgZnJvbSBcIi4vbW9kdWxlcy9uYXZcIjtcclxuXHJcbmdlbmVyYXRlTmF2KCk7XHJcbmdlbmVyYXRlSG9tZSgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9