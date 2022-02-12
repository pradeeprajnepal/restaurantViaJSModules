

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

export default generateMenu;