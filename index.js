//@Cache at least one element using selectElementById. 
//@Cache at least one element using querySelector or querySelectorAll.
//@  Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
//@ Iterate over a collection of elements to accomplish some task.
//@Create at least one element using createElement 
//@Use appendChild and/or prepend to add new elements to the DOM
//@ Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent
//@ Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
//@ Modify at least one attribute of an element in response to user interaction.
//@Register at least two different event listeners and create the associated event handler functions
//@ Use at least two Browser Object Model (BOM) properties or methods.
//@Include at least one form and/or input with HTML attribute validation.
//@Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
//@ Commit frequently to the git repository.
//@ Include a README file that contains a description of your application.
//@Level of effort displayed in creativity, presentation, and user experience

//@Cache at least one element using selectElementById. 
const heading = document.getElementById("title");
heading.style.color = "red";
console.log(heading);

//@Cache at least one element using querySelector or querySelectorAll.
const ul = document.querySelector('ul')
console.log(ul);

//@  Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
const parentUl = document.getElementById("ul");
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
console.log(ul.firstElementChild.nextElementSibling);
console.log(ul.childNodes[1]);

//@Create at least one element using createElement 
//@Use appendChild and/or prepend to add new elements to the DOM
const div= document.createElement("Methods");
let li1 = document.createElement("li");
li1.textContent = "getElementById";
div.appendChild(li1);
let li2 = document.createElement("li");
li2.textContent = "querySelector";
div.appendChild(li2);
let li3 = document.createElement("li");
li3.textContent = "querySelectorAll";
div.appendChild(li3);
let li4 = document.createElement("li");
li4.textContent = "append/removeChild";
div.appendChild(li4);
let li5 = document.createElement("li");
li5.textContent = "set/getChild";
div.appendChild(li5);
let li6 = document.createElement("li");
li6.textContent = "createElement";
div.appendChild(li6);
document.body.appendChild(div);
console.log(div.innerHTML);
console.log(div);

//@ Iterate over a collection of elements to accomplish some task.//@ Iterate over a collection of elements to accomplish some task.

const listItems = div.querySelectorAll('li');  
listItems.forEach((li, index) => {
  li.style.color = index % 2 === 0 ? 'purple' : 'green';  
  li.style.fontSize = '18px'; 
  li.style.fontWeight = 'bold'; 
});

//@ Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent

const input= document.getElementById("task");
const button = document.getElementById("btn");
const concepts= document.getElementById("list");

button.addEventListener('click', function(){
    // event.preventDefault();
    const text = input.value.trim();
    //@ Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
    input.classList.toggle("highlight");
    concepts.style.color = 'brown';
    if(text !== "")
    {
        const li = document.createElement('li');
        li.textContent = text;
        concepts.appendChild(li);
        input.value = "";
    }   
    
});

//@ Modify at least one attribute of an element in response to user interaction.

const a =document.createElement("a");
a.textContent = "Google";
a.setAttribute ("href", "https://www.google.com");
a.setAttribute("target", "_blank");
document.body.appendChild(a);

// Button to change the image source
const button1 = document.getElementById("changeImaBtn");
button1.addEventListener("click", function(){
    const img = document.getElementById("image");
    img.setAttribute("src","https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg");
})

//@Register at least two different event listeners and create the associated event handler functions

const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

button2.addEventListener("click", () => {
    alert("You clicked the Button!");
});

button3.addEventListener("mouseover",mouseOverHandler);
function mouseOverHandler()
{    
    alert("Mouse over the Button!");
}

//@ Use at least two Browser Object Model (BOM) properties or methods.

// Displaying the current browser URL
document.getElementById('browser-url').textContent = window.location.href;
//Displaying Screen Width
document.getElementById('screen-width').textContent = screen.width;

const bomMethodsDropdown = document.getElementById("bom-methods");

        // Listen for changes to the dropdown selection
        bomMethodsDropdown.addEventListener("change", function() {
            const selectedMethod = bomMethodsDropdown.value;
            alert("Selected BOM Method: " + selectedMethod);
        });

//@Include at least one form and/or input with HTML attribute validation.
        //HTML attribute validation in .html file
        
//@Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
// required,minLength, maxLength, pattern
    const form = document.getElementById("myForm");
    const input1 = document.getElementById("name");
        const validationMessage = document.getElementById("validation-message");
        // Event-based validation on input (while typing)
        input.addEventListener("input", function() {
            if (input.validity.valid) {
                validationMessage.style.display = 'none'; // Hide message if input is valid
            } else {
                validationMessage.style.display = 'inline'; // Show message if input is invalid
            }
        });

        form.addEventListener("submit", function(event) {
            if (!input1.checkValidity()) {
                event.preventDefault(); // Prevent form submission
                validationMessage.style.display = 'inline'; // Show validation message
            } else {
                validationMessage.style.display = 'none'; // Hide validation message
            }
        });