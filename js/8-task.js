// /**
//   |============================
//   | TASK 8
//   |============================
// */

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const emailIn = e.target.elements.email.value.trim();
  const passwordIn = e.target.elements.password.value.trim();
  if (emailIn === '' || passwordIn === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    const infoUser = {
      email: emailIn,
      password: passwordIn,
    };
    console.log(infoUser);
    formEl.reset();
  }
}
