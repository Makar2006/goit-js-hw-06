// /**
//   |============================
//   | TASK 8
//   |============================
// */

const formEl = document.querySelector('.login-form');
const btnEl = document.querySelector('[type="submit"]');

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (
    formEl.elements.email.value === '' ||
    formEl.elements.password.value === ''
  ) {
    alert('Всі поля повинні бути заповнені!');
  } else {
    const infoUser = {
      email: formEl.elements.email.value,
      password: formEl.elements.password.value,
    };
    console.log(infoUser);
  }
  formEl.reset();
}
