/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// const menuObj = document.querySelector('.header')
// menuItems.forEach(links => {
//  menuObj.appendChild(createMenu(links));
// })

const menuCont = document.createElement('div');
//Set class names
menuCont.classList.add('menu');

const menuButton = document.getElementsByClassName('header')[0];
menuButton.appendChild(menuCont)

//Define functional component here
function createMenu(menuArray) {
  //Define new elements
  const listCont = document.createElement('ul');
  menuCont.appendChild(listCont)
  //Iterate over the array to create the list items <li>
  menuArray.forEach(element => {
    let men = document.createElement('li');
    men.innerText = element;
    listCont.appendChild(men);
  })
  //Setup structure of elements
 // menuCont.appendChild(list);
  //Toggle events
  // Loop will not end - function invokes itself
  //document.querySelector('body').appendChild(createMenu(menuItems));
  
  return menuCont;
}
  
createMenu(menuItems);

document.querySeleector('.menu-button').addEventListener('click', function() {
    console.log('i work');
    menuCont.classList.toggle('menu--open');
})

