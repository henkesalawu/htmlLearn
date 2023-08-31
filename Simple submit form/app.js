const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#list');

form.addEventListener('submit',function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = catName;
    list.appendChild(newLi);
 
})