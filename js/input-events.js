//  события импутов

const refs = {
  input: document.querySelector('.js-input'),
  checkbox: document.querySelector('.js-checkbox'),
  labelName: document.querySelector('.js-button > span'),
  btn:document.querySelector('.js-button')
  
}

const { input, checkbox, labelName, btn } = refs;

// input.addEventListener('focus', onFocusInput);
// input.addEventListener('blur', onBlurInput);

// input.addEventListener('input', onChangeInput);

checkbox.addEventListener('change',onCheckBox)

function onFocusInput() { 
  console.log('Инпут получил фокус')
}

function onBlurInput() { 
  console.log('Инпут потерял фокус')
}

function onChangeInput(event) { 
  console.log(event.currentTarget.value);
  labelName.textContent = event.currentTarget.value;
}

function onCheckBox(event) { 
  console.log(event.currentTarget.checked);
  btn.disabled = !event.currentTarget.checked;
}