// Формы

const form = document.querySelector('.js-form');


form.addEventListener('submit',onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const formElements = event.currentTarget.elements

  // console.dir(formElements)

  // const email = formElements.email.value;
  // const password = formElements.password.value;
  // console.log(email, password);
  
  // const userData = {
  //   email,
  //   password
  // }
  // console.log(userData)

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });

  
  
}