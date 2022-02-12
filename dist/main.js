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

    contactItem('Email', 'mailto:timpkelly1@gmail.com', 'timpkelly1@gmail.com')
    contactItem('LinkedIn', 'https://www.linkedin.com/in/tim-patrick-kelly/', 'linkedin.com/in/tim-patrick-kelly')
    contactItem('Github', 'https://github.com/timkellytk', 'timkellytk')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDckM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUMxQjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVhO0FBQ047QUFDQTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7OztVQzFEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDRjtBQUN4QztBQUNBLHdEQUFXO0FBQ1gseURBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21vZHVsZXMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0KCl7XHJcbiAgICBjb25zdCBjb250ZW50PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtYm94XCIpO1xyXG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29udGFjdFNlY3Rpb25cIik7XHJcblxyXG4gICAgY29uc3QgaDM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGgzLnRleHRDb250ZW50PVwiQ29udGFjdFwiO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoMyk7XHJcblxyXG4gICAgY29uc3QgaXRlbXM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWl0ZW1zXCIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RJdGVtPShuYW1lLGxpbmssdGV4dCk9PntcclxuICAgICAgICBjb25zdCBkaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LnRleHRDb250ZW50PWAke25hbWV9OiBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFuY2hvcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1saW5rXCIpO1xyXG4gICAgICAgIGFuY2hvci5ocmVmPSBsaW5rO1xyXG4gICAgICAgIGFuY2hvci50ZXh0Q29udGVudD0gdGV4dDtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcclxuXHJcbiAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtcyk7XHJcblxyXG4gICAgY29udGFjdEl0ZW0oJ0VtYWlsJywgJ21haWx0bzp0aW1wa2VsbHkxQGdtYWlsLmNvbScsICd0aW1wa2VsbHkxQGdtYWlsLmNvbScpXHJcbiAgICBjb250YWN0SXRlbSgnTGlua2VkSW4nLCAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3RpbS1wYXRyaWNrLWtlbGx5LycsICdsaW5rZWRpbi5jb20vaW4vdGltLXBhdHJpY2sta2VsbHknKVxyXG4gICAgY29udGFjdEl0ZW0oJ0dpdGh1YicsICdodHRwczovL2dpdGh1Yi5jb20vdGlta2VsbHl0aycsICd0aW1rZWxseXRrJylcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVDb250YWN0OyIsIlxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVIb21lKCl7XHJcbiAgICBjb25zdCBjb250ZW50PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsXCJob21lU2VjdGlvblwiKTtcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudD0gXCJDYWZlIFRlcnJhY2VcIjtcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcblxyXG4gICAgY29uc3Qgc3ViSGVhZGluZz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgc3ViSGVhZGluZy5jbGFzc0xpc3QuYWRkKFwic3ViLWhlYWRpbmdcIik7XHJcbiAgICBzdWJIZWFkaW5nLnRleHRDb250ZW50PSBcIkVzdCAxODg4XCI7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHN1YkhlYWRpbmcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBpbWc9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBpbWcuc3JjPVwiLi4vc3JjL2NhZmUuanBnXCI7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lOyIsIlxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVNZW51KCl7XHJcbiAgICBjb25zdCBjb250ZW50PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtYm94XCIpO1xyXG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibWVudVNlY3Rpb25cIik7XHJcbiAgICBcclxuICAgIGNvbnN0IGxpc3Q9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaXN0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWxpc3RcIik7XHJcbiAgICBsaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsXCJtZW51LWxpc3RcIik7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGxpc3QpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVDYXRlZ29yeT0gKG5hbWUpPT57XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnk9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgY2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiaWRcIixuYW1lKTtcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0KHN0cmluZyl7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrc3RyaW5nLnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVudUhlYWQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgICAgICBtZW51SGVhZC5jbGFzc0xpc3QuYWRkKFwic3BlY2lhbFwiKTtcclxuICAgICAgICBtZW51SGVhZC50ZXh0Q29udGVudD0gY2FwaXRhbGl6ZUZpcnN0KG5hbWUpO1xyXG4gICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKG1lbnVIZWFkKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3BlY2lhbD0gbWVudUNhdGVnb3J5KFwiU3BlY2lhbFwiKTtcclxuICAgIGNvbnN0IHJlZ3VsYXI9IG1lbnVDYXRlZ29yeShcIlJlZ3VsYXJcIik7XHJcblxyXG4gICAgY29uc3QgbWVudUl0ZW1zPSAobmFtZSxwcmljZSxjYXRlZ29yeSk9PntcclxuICAgICAgICBjb25zdCBpdGVtPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbU5hbWU9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50PSBuYW1lO1xyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtUHJpY2U9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudD0gcHJpY2U7XHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1lbnVJdGVtcyhcIkNoaWNrZW4gTnVnZ2V0c1wiLFwiUnMgMjAwXCIsc3BlY2lhbCk7XHJcbiAgICBtZW51SXRlbXMoXCJDaGlja2VuIER1bXBsaW5nXCIsXCJScyAxMDBcIixzcGVjaWFsKTtcclxuICAgIG1lbnVJdGVtcyhcIlNpenpsZXJcIixcIlJzIDQwMFwiLHNwZWNpYWwpO1xyXG4gICAgbWVudUl0ZW1zKFwiRnJpZXNcIixcIlJzIDEwMFwiLHNwZWNpYWwpO1xyXG5cclxuICAgIG1lbnVJdGVtcyhcIkJ1cmdlclwiLFwiUnMgMjAwXCIscmVndWxhcik7XHJcbiAgICBtZW51SXRlbXMoXCJQaXp6YVwiLFwiUnMgNDAwXCIscmVndWxhcik7XHJcbiAgICBtZW51SXRlbXMoXCJUYWNvc1wiLFwiUnMgNDAwXCIscmVndWxhcik7XHJcbiAgICBtZW51SXRlbXMoXCJEcmlua3NcIixcIlJzIDEwMFwiLHJlZ3VsYXIpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVNZW51OyIsImltcG9ydCBnZW5lcmF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGdlbmVyYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZU5hdigpe1xyXG4gICAgY29uc3QgY29udGVudD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IG5hdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBuYXZCdG5zPSAobmFtZSk9PntcclxuICAgICAgICBjb25zdCBidG49IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcclxuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIixuYW1lKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2FwaXRhbEZpcnN0KHN0cmluZyl7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrc3RyaW5nLnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnRuLnRleHRDb250ZW50PWNhcGl0YWxGaXJzdChuYW1lKTtcclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbiAgICB9XHJcbiAgICBuYXZCdG5zKFwiaG9tZVwiKTtcclxuICAgIG5hdkJ0bnMoXCJtZW51XCIpO1xyXG4gICAgbmF2QnRucyhcImNvbnRhY3RcIik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpe1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MPVwiXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGhvbWVCdG49IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcclxuICAgIGNvbnN0IG1lbnVCdG49IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51JylcclxuICAgIGNvbnN0IGNvbnRhY3RCdG49IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKVxyXG4gICAgXHJcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgICAgIGdlbmVyYXRlTmF2KCk7XHJcbiAgICAgICAgZ2VuZXJhdGVIb21lKCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgICAgIGdlbmVyYXRlTmF2KCk7XHJcbiAgICAgICAgZ2VuZXJhdGVNZW51KCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgICAgIGdlbmVyYXRlTmF2KCk7XHJcbiAgICAgICAgZ2VuZXJhdGVDb250YWN0KCk7XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTmF2OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdlbmVyYXRlSG9tZSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIjtcclxuaW1wb3J0IGdlbmVyYXRlTmF2IGZyb20gXCIuL21vZHVsZXMvbmF2XCI7XHJcblxyXG5nZW5lcmF0ZU5hdigpO1xyXG5nZW5lcmF0ZUhvbWUoKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==