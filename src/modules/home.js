

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

export default generateHome;