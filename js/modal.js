const optionModal = {
  openModal: document.querySelector('[data-action="open-modal"]'),
  closeModal: document.querySelector('[data-action="close-modal"]'),
  backdrop:document.querySelector('.js-backdrop')
}


optionModal.openModal.addEventListener('click', onModalOpen);
optionModal.closeModal.addEventListener('click', onModalClose);
optionModal.backdrop.addEventListener('click', onBackdropClick);



function onModalOpen() { 
  window.addEventListener('keydown',onEscapeKeyPress)
  document.body.classList.add('show-modal')
};
function onModalClose() { 
  window.removeEventListener('keydown',onEscapeKeyPress)
   document.body.classList.remove('show-modal')
};

function onBackdropClick(event) { 
  
  if (event.currentTarget === event.target) { 
     console.log('Клик на backdrop',event.currentTarget)
    onModalClose();
  }
};

function onEscapeKeyPress(event) { 
  if (event.code === 'Escape') { 
    onModalClose()
  }
 
}

