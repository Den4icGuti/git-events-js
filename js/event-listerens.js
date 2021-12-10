const subBtnRef = document.querySelector('.js-btn');
const addBtnRef = document.querySelector('.js-add-btn');
const removeBtnRef = document.querySelector('.js-remove-btn')


addBtnRef.addEventListener('click', event => {
  console.log(event)
  console.log('Вешаю слушателя на целевую кнопку')

  subBtnRef.addEventListener('click',onTargetBtnClick )
});

removeBtnRef.addEventListener('click', () => { 
  console.log('Снимаю слушателя события с целевой кнопки');

  subBtnRef.removeEventListener('click', onTargetBtnClick)
  });


function onTargetBtnClick() { 
  console.log('Клик по целевой кнопке');
}