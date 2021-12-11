//  события клавиатуры (keypress, keydown, keyup)

const refs = {
  clearBtn: document.querySelector('.js-clear'),
  output: document.querySelector('.js-output')
};

window.addEventListener('keypress', onKeyPress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeyPress(event) { 
  console.log(event);

  refs.output.textContent += event.code;
}

function onClearOutput() { 
  refs.output.textContent = ''
}