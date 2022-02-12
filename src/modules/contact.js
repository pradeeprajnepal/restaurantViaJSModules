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

export default generateContact;