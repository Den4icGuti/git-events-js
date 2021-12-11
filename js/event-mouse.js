const boxRef = document.querySelector('.js-box');

const innerBoxRef = document.querySelector('.js-inner-box')

boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);

innerBoxRef.addEventListener('mouseenter',onMouseEnterInnerBox);
innerBoxRef.addEventListener('mouseleave',onMouseLeaveInnerBox)

function onMouseEnter(event) { 
  const box = event.currentTarget;
  box.classList.add('box--active');
};

function onMouseLeave(event) { 
  const box = event.currentTarget;
  box.classList.remove('box--active')
}

function onMouseEnterInnerBox(event) { 
  const box = event.currentTarget;
  box.classList.add('box--active--inner');
};

function onMouseLeaveInnerBox(event) { 
  const box = event.currentTarget;
  box.classList.remove('box--active--inner');
};


