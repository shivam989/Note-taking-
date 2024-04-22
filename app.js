




let inpEl = document.querySelector('input')
let btnEl = document.querySelector('button')
let list = document.querySelector('#list')
// let icon = document.createElement('<i class="fa-solid fa-trash fa-beat" style="color: #00f0ec;"></i>')

btnEl.addEventListener('click' , function(){

  let noteText=  inpEl.value;
  
  let li =  document.createElement('li');
  // let icon = document.createElement('<i class="fa-solid fa-trash fa-beat" style="color: #00f0ec;"></i>')

  li.innerText = noteText;

  list.appendChild(li);

  inpEl.value = ""; // getter or setter'
  li.addEventListener('click' , ()=>{
    // let icon = createElement('<i class="fa-solid fa-trash fa-beat" style="color: #00f0ec;"></i>')
    li.remove()
    // li.appendChild(icon)
  })
})