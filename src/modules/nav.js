import generateContact from "./contact";
import generateHome from "./home";
import generateMenu from "./menu";

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
        generateHome();
    })
    
    menuBtn.addEventListener('click', () => {
        clearContent();
        generateNav();
        generateMenu();
    })
    
    contactBtn.addEventListener('click', () => {
        clearContent();
        generateNav();
        generateContact();
    })
    
}

export default generateNav;