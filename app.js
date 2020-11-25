 // Contact Constructor 
 function Contact(name,surname,email,phone){
     this.name = name;
     this.surname = surname;
     this.phone = phone; 
     this.email = email;
 }
 
 // UI Constructor 
function UI(){}

/* This method simulates what happens when we hit that submit button. Since I am not actually
sending data, I am just changing the page contect if everything went ok or showing error msg*/
UI.prototype.sendForm = async(contact) => {
    await setTimeout(() => {
        const main = document.querySelector('main'),
              form = document.getElementById('contact-form'),
              title = document.querySelector('h1.title'),
              subtitle = document.querySelector('h3.subtitle'),
              msg = document.createElement('h2');

        msg.innerHTML = `¡Gracias por contactarnos ${contact.name}! Nuestro equipo estará en 
                        contacto contigo a la brevedad ;)`;

        msg.setAttribute('class','success');
        form.setAttribute('class','non-visible');
        title.setAttribute('class','non-visible');
        subtitle.setAttribute('class','non-visible');
        main.appendChild(msg);

    },1500);
}

// Event Listeners 
document.getElementById('contact-form').addEventListener('submit',(e) => {
    // Store the values of the different fields 
    const name = document.getElementById('name').value,
          surname = document.getElementById('surname').value,
          email = document.getElementById('email').value,
          phone = document.getElementById('phone').value;
    
    const contact = new Contact(name,surname,email,phone);
    const ui = new UI();

    ui.sendForm(contact);

    /*Since I am not actually sending anything, I am preventing the redirection */
    e.preventDefault();
});