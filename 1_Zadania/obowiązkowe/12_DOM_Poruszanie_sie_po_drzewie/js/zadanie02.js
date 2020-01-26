document.addEventListener('DOMContentLoaded', () => {
    var randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
    function toggle() {
      this.parentElement.style.backgroundColor = randomColor();
    }
    document.querySelectorAll('.button')
      .forEach(el => el.addEventListener('click', toggle))
  });