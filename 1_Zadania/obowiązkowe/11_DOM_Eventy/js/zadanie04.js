document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    function add() {
      document.querySelector('.counter').innerText = ++counter;
    }
    document.querySelectorAll('button').forEach(el => el.addEventListener('click', add));
  });   