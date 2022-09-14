const items = document.querySelector('.items')
const input = document.querySelector('.item__input')
const addBtn = document.querySelector('.footer__imgbox')

function onAdd() {
  const text = input.value
  if (text === '') {
    input.focus()
    return
  } 
  const item = createItem(text)
  items.appendChild(item)
  
  input.value = ''
  input.focus()
}



function createItem(text) {
  const li = document.createElement('li')
  li.innerHTML = `
    <div class="item">
      <span class="item__name">${text}</span>
      <i class="fas fa-trash" onclick="onclickDelete(event)"></i>
    </div>
    <div class="item__divider"></div>
  `
  return li
}

const onclickDelete = (e) => {
  items.removeChild(e.target.parentNode.parentNode)
}


addBtn.addEventListener('click', onAdd)
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    onAdd()
  }
})