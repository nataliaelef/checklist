addItem = () => {
  const list = document.getElementById('myList');
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const textbox = document.createElement('input');
  const dateBox = document.createElement('input');

  checkbox.type = 'checkbox';
  textbox.type = 'text';
  dateBox.type = 'date';
  checkbox.onchange = ({ target }) => checkItem(target);
  //checkbox.onchange = event => checkItem(event.target);

  listItem.appendChild(checkbox);
  listItem.appendChild(textbox);
  listItem.appendChild(dateBox);

  list.appendChild(listItem);
};

checkItem = item => {
  const text = item.nextElementSibling;
  if (item.checked) {
    text.setAttribute('style', 'text-decoration:line-through');
  } else {
    text.setAttribute('style', 'text-decoration: none');
  }
};

compareDate = dateInput => {
  const newDate = new Date();
  const chosenDate = new Date(dateInput.value);
  if (newDate > chosenDate) {
    const text = dateInput.previousElementSibling;
    text.setAttribute('style', 'color: red');
  }
};
