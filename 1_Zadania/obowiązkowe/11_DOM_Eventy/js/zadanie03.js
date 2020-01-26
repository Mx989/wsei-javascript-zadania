document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[id*=button]').forEach((button) => {
      let counter = 0;
      button
        .addEventListener(
          'click',
          () => button
            .nextElementSibling
            .querySelector('.counter').innerText = ++counter);
    })
  });