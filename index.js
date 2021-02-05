// // Import stylesheets
import "./style.css";

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const div = document.getElementsByClassName("group");

for (let a of div) {
  a.addEventListener("click", e => {
     if (a.parentElement.children[1].style.maxHeight) {
      a.parentElement.children[1].style.maxHeight = null;
    } else {
      a.parentElement.children[1].style.maxHeight = a.parentElement.children[1].scrollHeight + "px";
    }
    // a.pa?rentElement.children[1].classList.toggle("group-expended");
  });
}

// document.getElementsByClassName('group').forEach(el => el.addEventListener('click', event => {
//   console.log(event.target.getAttribute("data-el"));
// }));
