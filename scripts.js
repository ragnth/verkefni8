const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');
  text.init(form, items);
});

const text = (() => {
  let items;
  let checkbox; //input með type checkbox
  let item; // færsla á lista
  let texti; // texti sem á að skrá
  let eyda; // Eyða takki
  let form;
  let formtext;


  function init(_form, _items) {
    items = _items;

    checkbox = items.querySelectorAll('.item__checkbox'); 
    for (let i = 0; i < checkbox.length; i++) {
      checkbox[i].addEventListener('change', finish);
    }

    // item = items.querySelector('.item');

    eyda = items.querySelectorAll('.item__button');
    for (let i = 0; i < eyda.length; i++) {    
      eyda[i].addEventListener('click', deleteItem);
    }

    form = _form;
    formtext = form.querySelector('.form__input');

    span = items.querySelectorAll('.item__text');
    for (let i = 0; i < span.length; i++) {
      span[i].addEventListener('click', edit);
    }
    
  
    _form.addEventListener('submit', formHandler);

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();
    //sækja texta sem var skrifaður í form
    texti = document.getElementsByClassName('form__input')[0].value;
    // clear formið
    formtext.value = '';
    // ef textinn er ekki tómistrengurinn þá fara í add()
    if (!texti.replace(/\s/g, '').length){
      console.log('þetta er tómur strengur, það má ekki');
    } else {
      console.log('fór inn í else');
      add(texti);
    }  
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.preventDefault();
    //e.target.parentNode
    //e.target.className
    //e.target.checked
    const gildi = e.target.parentNode; //foreldri checkboxins sem er valið
    gildi.classList.toggle('item--done'); 
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    const gildi = e.target.parentNode; //foreldri span sem er valið
    const barn = e.target.className; // nafn á classa á span sem er valið
    // setja nýjan texta í stað gamla --- á eftir að klára
    gildi.getElementsByClassName(barn)[0].innerHTML='Nýr texti';
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    //Náði ekki að gera
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    console.log('nú er value' + value);

    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'item__checkbox');

    const span = document.createElement('span');
    span.setAttribute('class', 'item__text');
    span.appendChild(document.createTextNode(value));

    const button = document.createElement('button');
    button.setAttribute('class', 'item__button');
    button.appendChild(document.createTextNode('Eyða'));

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    items.appendChild(li);
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    e.preventDefault();
    var elem = e.target.parentNode;
    elem.parentNode.removeChild(elem); 
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {

  }

  return {
    init: init
  }
})();
