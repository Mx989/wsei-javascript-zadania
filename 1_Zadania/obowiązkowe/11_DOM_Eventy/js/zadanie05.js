document.addEventListener('DOMContentLoaded', () => {
    var randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
    const party = function () {
      this.style.backgroundColor = randomColor();
    };
    document.querySelectorAll('div')
      .forEach(el => el.addEventListener('click', party));
  });