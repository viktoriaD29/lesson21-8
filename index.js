export const finishList = () => {
  const elem1 = document.createElement('li')
  elem1.textContent = '1'
  const elemUl1 = document.querySelector('ul')
  elemUl1.prepend(elem1);

  const elem2 = document.createElement('li');
  elem2.textContent = '4';
  const elemUl2 = document.querySelector('.special');
  elemUl2.before(elem2);

  const elem3 = document.createElement('li');
  elem3.textContent = '6';
  const elemUl3 = document.querySelector('.special');
  elemUl3.after(elem3);

  const elem4 = document.createElement('li');
  elem4.textContent = '8';
  const elemUl4 = document.querySelector('.special');
  elemUl4.append(elem4);
}
